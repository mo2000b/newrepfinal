import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Product } from '../types';
import { supabase } from '../lib/supabaseClient';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-xl text-gray-600">Chargement du produit...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xl text-gray-600">Produit non trouvé</div>
      </div>
    );
  }

  const qrCodeData = JSON.stringify({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image_url}
              alt={product.name}
              className="h-96 w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold text-red-600">
                {product.price.toFixed(2)} €
              </span>
              <span className="text-lg text-gray-600">
                {product.quantity} en stock
              </span>
            </div>
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold mb-4">Code QR du produit</h2>
              <div className="flex justify-center bg-white p-4 rounded-lg">
                <QRCodeSVG value={qrCodeData} size={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
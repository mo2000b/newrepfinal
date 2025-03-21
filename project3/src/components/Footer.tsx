import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +33 1 23 45 67 89
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@wepack.fr
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Rue de Paris, 75001 Paris
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Heures d'ouverture</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Lun - Ven: 9h - 18h
              </p>
              <p className="ml-7">Sam: 9h - 12h</p>
              <p className="ml-7">Dim: Fermé</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} WePack. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image_url: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  is_admin: boolean;
}
export type Category = 'console' | 'pc' | 'accessory' | 'chair' | 'headset';

export type ProductTag = 'new' | 'hot';

export interface Product {
  id: number;
  nameF: string;
  nameE: string;
  price: number;
  oldPrice?: number;
  cat: Category;
  rating: number;
  reviews: number;
  tag?: ProductTag;
  color: string;
  image : string ;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export type Lang = 'fa' | 'en';
export type Theme = 'dark' | 'light';

export interface CheckoutForm {
  name: string;
  phone: string;
  address: string;
  city: string;
  card: string;
  expiry: string;
  cvv: string;
}

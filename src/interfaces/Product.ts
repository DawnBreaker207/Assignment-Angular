import { Category } from './Category';

export interface Product {
  id?: number;
  name: string;
  price: string | number;
  image?: any;
  categories?: Category;
}

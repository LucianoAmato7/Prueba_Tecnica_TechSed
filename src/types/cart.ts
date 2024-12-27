import { Product } from "./product";

export type Cart = {
  id: string;
  items: {
    product: Product;
    quantity: number;
  }[];
  createdAt: Date;
};

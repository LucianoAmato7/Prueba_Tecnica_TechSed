import { Cart } from "../cart";
import { Product } from "../product";

export interface StockStatusProps {
    stock: number;
}

export interface ProductPriceProps {
    price: number;
    listingPrice?: number;
}

export interface CartSummaryProps {
    cart: Cart;
}

export interface ProductQuantityProps {
    product: Product;
    cart: Cart;
    AddToCartModifier: (quantity: number) => void;
    removeFromCartModifier: (productId: string) => void;
}

export interface CartActionButtonsProps  {
    quantity: number;
    currentQuantity: number;
    productId: string;
    AddToCartModifier: (quantity: number) => void;
    removeFromCartModifier: (productId: string) => void;
};
import { Cart } from "../types/cart";
import { Product } from "../types/product";

// Interfaces utilizadas en los componentes de la aplicación para tipar las props.

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
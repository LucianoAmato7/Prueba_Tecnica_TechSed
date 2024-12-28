import { Cart } from "../types/cart";
import { Product } from "../types/product";

// Interfaces utilizadas en los componentes de la aplicación para tipar las props.

export interface CartActionButtonsProps  {
    quantity: number;
    currentQuantity: number;
    product: Product;
    cart: Cart
    setCart: (value: Cart) => void;
};

export interface CartSummaryProps {
    cart: Cart;
}

export interface ProductPriceProps {
    price: number;
    listingPrice?: number;
}

export interface ProductQuantityProps {
    product: Product;
    cart: Cart;
    setCart: (value: Cart) => void;
}

export interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (value: number) => void;
    inputValue: number;
    setInputValue: (value: number) => void;
    product: Product;
}

export interface StockStatusProps {
    stock: number;
}
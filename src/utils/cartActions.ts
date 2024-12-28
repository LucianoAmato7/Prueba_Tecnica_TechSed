import { Cart } from "@/types/cart";
import { Product } from "@/types/product";

// Funciones para agregar o eliminar productos del carrito.

export function addToCart(
  product: Product,
  quantity: number,
  cart: Cart,
  setCart: (value: Cart) => void
) {
  if(quantity > 0) {
    if (product.stock < quantity) {
      console.error(`Stock insuficiente para el producto: ${product.title}`);
      return;
    }
  
    const existingProductIndex = cart.items.findIndex(
      (item) => item.product.id === product.id
    );
  
    let updatedItems = [...cart.items];
  
    if (existingProductIndex >= 0) {
      updatedItems[existingProductIndex] = { ...updatedItems[existingProductIndex], quantity };
    } else {
      updatedItems = [...updatedItems, { product, quantity }];
    }
  
    setCart({ ...cart, items: updatedItems });
  }
}

export function removeFromCart(
  productID: string,
  cart: Cart,
  setCart: (value: Cart) => void
) {
  if(productID && cart.items.length > 0) {
    const updatedItems = cart.items.filter((item) => item.product.id !== productID);
    setCart({ ...cart, items: updatedItems });
  }
}

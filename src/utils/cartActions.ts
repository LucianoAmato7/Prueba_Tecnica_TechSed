import { Cart } from "@/types/cart";
import { Product } from "@/types/product";

// Funciones para agregar o eliminar productos del carrito.

export function addToCart(
  product: Product,
  quantity: number,
  cart: Cart,
  setCart: (value: Cart) => void
) {

  if(quantity <= 0) {
    console.log(`La cantidad de productos debe ser mayor a 0`);
    return;
  }

  if (quantity > product.stock) {
    console.log(`Stock insuficiente para el producto: ${product.title}`);
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

export function removeFromCart(
  productID: string,
  cart: Cart,
  setCart: (value: Cart) => void
) {

  if(cart.items.length === 0) {
    console.log(`El carrito está vacío`);
    return;
  }
  
  const updatedItems = cart.items.filter((item) => item.product.id !== productID);
  setCart({ ...cart, items: updatedItems });
}

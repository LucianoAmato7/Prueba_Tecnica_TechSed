import { CartActionButtonsProps } from "@/interfaces/interfaces";
import { addToCart, removeFromCart } from "@/utils/cartActions";
import Icons from "@/utils/icons";

// Componente que muestra los botones de acción para agregar o eliminar un producto del carrito.

export default function CartActionButtons({
  quantity,
  currentQuantity,
  product,
  cart,
  setCart
}:CartActionButtonsProps) {
  return (
    <div className="space-y-4 text-lg font-semibold flex flex-col items-center">
      <button
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 shadow-lg flex items-center rounded-e-full rounded-s-full justify-center gap-2"
        onClick={() => addToCart(product, quantity, cart, setCart)}
      >
        {currentQuantity > 0 ? "Cambiar cantidad" : "Agregar"}
        <Icons.Cart className="text-2xl" />
      </button>

        <button
            className={`${currentQuantity > 0 ? "" : "opacity-40"} w-full text-blue-900 py-4 rounded-e-full rounded-s-full shadow-lg border-2 border-blue-900 hover:border-blue-800 transition-opacity duration-500 ease-in-out transform`}
            onClick={() => removeFromCart(product.id, cart, setCart)}
            disabled={currentQuantity === 0}
        >
            Eliminar del carrito
        </button>

    </div>
  );
}

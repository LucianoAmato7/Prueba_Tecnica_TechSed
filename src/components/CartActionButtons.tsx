import { CartActionButtonsProps } from "@/types/interfaces/interfaces";
import Icons from "@/utils/icons";

export default function CartActionButtons({
  quantity,
  currentQuantity,
  productId,
  AddToCartModifier,
  removeFromCartModifier
}: CartActionButtonsProps) {
  return (
    <div className="space-y-4 text-lg font-semibold flex flex-col items-center">
      <button
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 shadow-lg flex items-center rounded-e-full rounded-s-full justify-center gap-2"
        onClick={() => AddToCartModifier(quantity)}
      >
        {currentQuantity > 0 ? "Cambiar cantidad" : "Agregar"}
        <Icons.Cart className="text-2xl" />
      </button>

        <button
            className={`${currentQuantity > 0 ? "" : "opacity-40"} w-full text-blue-900 py-4 rounded-e-full rounded-s-full shadow-lg border-2 border-blue-900 hover:border-blue-800 transition-opacity duration-500 ease-in-out transform`}
            onClick={() => removeFromCartModifier(productId)}
            disabled={currentQuantity === 0}
        >
            Eliminar del carrito
        </button>

    </div>
  );
}

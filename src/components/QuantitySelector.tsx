import { QuantitySelectorProps } from "@/interfaces/interfaces";
import { GetPackageDescription } from "@/utils/gettersProductDescription";
import { HandleDecrement, HandleIncrement } from "@/utils/quantitySelectorActions";
import React from "react";

// Componente que muestra el selector de cantidad del producto a agregar al carrito.

function QuantitySelector({
  quantity,
  setQuantity,
  setInputValue,
  product,
}: QuantitySelectorProps) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="font-bold text-sm">
        {GetPackageDescription(product.salesUnit)}
      </span>
      <div className="flex items-center space-x-1 place-items-center">
        <button
          className="border border-gray-300 text-xl px-3 rounded-md font-semibold"
          onClick={() =>
            HandleDecrement(quantity, setQuantity, setInputValue, product)
          }
        >
          -
        </button>
        <span className="border border-gray-300 px-7 py-1 rounded-md font-semibold">
          {quantity}
        </span>
        <button
          className="border border-gray-300 text-xl px-2 rounded-md"
          onClick={() =>
            HandleIncrement(quantity, setQuantity, setInputValue, product)
          }
        >
          +
        </button>
      </div>
      <span className="text-gray-400 text-sm">Disponibles: {product.stock}</span>
    </div>
  );
}

export default QuantitySelector;

"use client";

import { ProductQuantityProps } from "@/types/interfaces/interfaces";
import { useState } from "react";
import CartActionButtons from "./CartActionButtons";

export default function ProductQuantity({
  product,
  cart,
  AddToCartModifier,
  removeFromCartModifier,
}: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const cartItem = cart.items.find((item) => item.product.id === product?.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  function HandleDecrement() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

  function HandleIncrement() {
    if (product.stock > quantity + currentQuantity) {
      setQuantity(quantity + 1);
    }
  }

  function GetFieldDescription() {
    let unit;
    if (product.salesUnit === "group") {
      unit = "unidades";
    } else if (product.salesUnit === "area") {
      unit = "m²";
    }
    return unit;
  }

  function GetTittleToField() {
    let tittle;
    if (product.salesUnit === "group") {
      tittle = "Cantidad de Unidades";
    } else if (product.salesUnit === "area") {
      tittle = "Superficie";
    }
    return tittle;
  }

  function GetPackageDescription() {
    let packageDescription;
    if (product.salesUnit === "group") {
      packageDescription = "Cantidad de pallets";
    } else if (product.salesUnit === "area") {
      packageDescription = "Cantidad de cajas";
    } else if (product.salesUnit === "unit") {
      packageDescription = "Cantidad de unidades";
    }
    return packageDescription;
  }

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex row items-center space-x-14">
        {product.measurementUnit && (
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-sm">{GetTittleToField()}</span>
            <div className="flex row items-center space-x-1">
              <input
                type="cantidad"
                className="text-center bg-transparent border border-gray-300 py-1 rounded-md font-semibold w-16"
                value={inputValue}
                onChange={(e) => setInputValue(parseInt(e.target.value))}
              />
              <span className="text-gray-400">{GetFieldDescription()}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-1">
          <span className="font-bold text-sm">{GetPackageDescription()}</span>
          <div className="flex items-center space-x-1 place-items-center">
            <button
              className="border border-gray-300 text-xl px-3 rounded-md font-semibold"
              onClick={() => HandleDecrement()}
            >
              -
            </button>
            <span className="border border-gray-300 px-7 py-1 rounded-md font-semibold">
              {quantity}
            </span>
            <button
              className="border border-gray-300 text-xl px-2 rounded-md"
              onClick={() => HandleIncrement()}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-400 font-bold">
        {product.description}
      </div>

      <CartActionButtons
        quantity={quantity}
        currentQuantity={currentQuantity}
        productId={product.id}
        AddToCartModifier={AddToCartModifier}
        removeFromCartModifier={removeFromCartModifier}
      />
    </div>
  );
}

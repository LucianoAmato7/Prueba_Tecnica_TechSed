"use client";
import { ProductQuantityProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import CartActionButtons from "./CartActionButtons";
import { handleInputChangeFactory } from "@/utils/quantitySelectorFunctions";
import QuantitySelector from "./QuantitySelector";
import {
  GetFieldDescription,
  GetTittleToField,
} from "@/utils/gettersProductDescription";

export default function ProductQuantity({
  product,
  cart,
  AddToCartModifier,
  removeFromCartModifier,
}: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(0);

  const cartItem = cart.items.find((item) => item.product.id === product?.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    // Si el producto tiene una unidad de medida (measurementUnit) se establece el valor de la unidad de medida.
    if (product.salesUnit === "group" && product.unitValue) {
      setInputValue(product.unitValue);
    } else if (product.salesUnit === "area" && product.unitValue) {
      setInputValue(product.unitValue);
      setQuantity(Math.ceil(product.unitValue / product.unitValue));
    } else {
      setInputValue(1);
    }
  }, [product.salesUnit, product.unitValue]);

  const handleInputChange = handleInputChangeFactory(
    product.salesUnit,
    product.unitValue,
    setQuantity,
    product.stock,
  );

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex row space-x-14">
        {/* Se renderiza solo si el producto tiene unidad de medida (measurementUnit).*/}
        {product.measurementUnit && (
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-sm">
              {GetTittleToField(product.salesUnit)}
            </span>
            <div className="flex row items-center space-x-1">
              <input
                type="number"
                className="text-center bg-transparent border border-gray-300 py-1 rounded-md font-semibold w-20"
                value={inputValue === 0 ? "" : inputValue}
                onChange={(e) => handleInputChange(e, setInputValue)}
                min="0"
                step={product.salesUnit === "area" ? "0.01" : "1"}
              />
              <span className="text-gray-400">
                {GetFieldDescription(product.salesUnit)}
              </span>
            </div>
            <span className="text-gray-400 text-sm">Disponibles: {(product.unitValue ?? 0) * (product.stock ?? 0)}</span>
      </div>
        )}

        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          inputValue={inputValue as number}
          setInputValue={setInputValue as (value: number) => void}
          product={product}
        />
      </div>

      <div className="text-base text-gray-400">{product.description}</div>

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

"use client";
import { ProductQuantityProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import CartActionButtons from "./CartActionButtons";
import {
  GetFieldDescription,
  GetPackageDescription,
  GetTittleToField,
  handleInputChangeFactory,
} from "@/utils/quantitySelectorFunctions";

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
    if (product.salesUnit === "group" && product.unitValue) {
      setInputValue(product.unitValue);
    } else if (product.salesUnit === "area" && product.unitValue) {
      setInputValue(product.unitValue);
      setQuantity(Math.ceil(product.unitValue / product.unitValue));
    } else {
      setInputValue(1); // Para 'unit' o cualquier otro caso
    }
  }, [product.salesUnit, product.unitValue]);


  function HandleDecrement() {
    if (quantity !== 0) {
      if (product.salesUnit === "unit") {
        setQuantity(quantity - 1);
      } else if (product.salesUnit === "group" && product.unitValue !== undefined) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        setInputValue(newQuantity * product.unitValue);
      } else if (product.salesUnit === "area" && product.unitValue !== undefined) {
        const newInputValue = Math.max(0, inputValue - product.unitValue);
        setInputValue(parseFloat(newInputValue.toFixed(2)));
        setQuantity(Math.ceil(newInputValue / product.unitValue));
      }
    }
  }
  
  function HandleIncrement() {
    if (product.stock > quantity) {
      if (product.salesUnit === "unit") {
        setQuantity(quantity + 1);
      } else if (product.salesUnit === "group" && product.unitValue !== undefined) {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setInputValue(newQuantity * product.unitValue);
      } else if (product.salesUnit === "area" && product.unitValue !== undefined) {
        const newInputValue = inputValue + product.unitValue;
        setInputValue(parseFloat(newInputValue.toFixed(2)));
        setQuantity(Math.ceil(newInputValue / product.unitValue));
      }
    }
  }
  
  
  const handleInputChange = handleInputChangeFactory(product.salesUnit);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex row items-center space-x-14">
        {product.measurementUnit && (
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-sm">
              {GetTittleToField(product.salesUnit)}
            </span>
            <div className="flex row items-center space-x-1">
              <input
                type="number"
                className="text-center bg-transparent border border-gray-300 py-1 rounded-md font-semibold w-20"
                value={inputValue}
                onChange={(e) => handleInputChange(e, setInputValue)}
                min="0"
                step="0.01"
                //Va a permitir 4 dígitos enteros y 2 decimales si la unidad de venta es por area
                pattern={
                  product.salesUnit === "area"
                    ? "^d{0,4}(.d{0,2})?$"
                    : "^d{0,4}$"
                }
              />
              <span className="text-gray-400">
                {GetFieldDescription(product.salesUnit)}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-1">
          <span className="font-bold text-sm">
            {GetPackageDescription(product.salesUnit)}
          </span>
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

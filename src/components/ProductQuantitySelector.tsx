"use client";
import { ProductQuantityProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import CartActionButtons from "./CartActionButtons";
import {
  handleInputChangeFactory,
} from "@/utils/quantitySelectorFunctions";
import QuantitySelector from "./QuantitySelector";
import { GetFieldDescription, GetTittleToField } from "@/utils/gettersProductDescription";

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
  
  const handleInputChange = handleInputChangeFactory(product.salesUnit, product.unitValue, setQuantity, product.stock, currentQuantity);

  console.log(product.unitValue && product.stock * product.unitValue);
  
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
                value={inputValue}
                onChange={(e) => handleInputChange(e, setInputValue)}
                min="0"
                step="0.01"
                // Solo se va a poder ingresar una medida si la unidad de venta (salesUnit) es por "area"
                // Ya que en caso de que la unidad de venta (saletUnit) sea "group", la cantidad debe ser siempre múltiplos del tamaño del grupo.
                // Si la unidad de venta (saletUnit) es por "unit", no se renderiza.
                disabled={product.salesUnit != "area"}
                pattern={ // Va a permitir 4 dígitos enteros y 2 decimales si la unidad de venta es por area
                  product.salesUnit === "area"
                    ? "^\\d{0,4}(\\.\\d{0,2})?$"
                    : "^\\d{0,4}$"
                }
              />
              <span className="text-gray-400">
                {GetFieldDescription(product.salesUnit)}
              </span>
            </div>
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

      <div className="text-base text-gray-400">
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

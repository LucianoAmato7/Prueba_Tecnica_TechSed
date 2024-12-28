import { Product } from "@/types/product";

// Valida la entrada de datos en el input de cantidad y actualizar la cantidad de productos seleccionados.

export function handleInputChangeFactory(
  salesUnit: Product["salesUnit"],
  unitValue?: number,
  setQuantity?: (value: number) => void,
  stock?: number
) {
  return function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setInputValue: (value: number) => void
  ) {
    const value = e.target.value;
    let regex;

    // Define el patrón según la unidad de venta
    if (salesUnit === "area") {
      regex = /^\d{0,4}(\.\d{0,2})?$/
    } else {
      regex = /^\d{0,4}$/;
    }

    if (regex.test(value)) {

      const newValue = value === "" ? 0 : parseFloat(value);
      const requiredQuantity = unitValue ? Math.ceil(newValue / unitValue) : 0;

      if (!isNaN(newValue)) {
        const max = (unitValue ?? 0) * (stock ?? 0);

        // Validar que no supere el máximo permitido
        if (newValue <= max && setQuantity) {
          setQuantity(requiredQuantity);
          if (salesUnit === "area") {
            setInputValue(newValue);
          } else if (
            salesUnit === "group" &&
            unitValue !== undefined
          ) {            
            setInputValue(Math.ceil(newValue));
          }
        }
      }
    }
  };
}
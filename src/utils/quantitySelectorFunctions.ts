import { Product } from "@/types/product";

// Funciones para renderizar textos dinámicos dependiendo de la unidad de venta del producto,
// para validar la entrada de datos en el input de cantidad
// y para manejar la cantidad de productos seleccionados

// export function handleInputChangeFactory(
//   salesUnit: Product["salesUnit"],
//   unitValue?: number,
//   setQuantity?: (value: number) => void,
//   stock?: number,
//   currentQuantity?: number
// ) {
//   return function handleInputChange(
//     e: React.ChangeEvent<HTMLInputElement>,
//     setInputValue: (value: number) => void
//   ) {
//     const value = e.target.value;
//     let regex;

//     // Define el patrón según la unidad de venta
//     if (salesUnit === "area") {
//       regex = /^\d{0,4}(\.\d{0,2})?$/;
//     } else {
//       regex = /^\d{0,4}$/;
//     }

//     if (regex.test(value)) {
//       const newValue = value === "" ? 0 : parseFloat(value);

//       if (!isNaN(newValue)) {
//         const max = (unitValue ?? 0) * (stock ?? 0);

//         // Validar que no supere el máximo permitido
//         if (newValue <= max) {
//           if (salesUnit === "area" && unitValue !== undefined && setQuantity) {
//             setInputValue(newValue);
//             const requiredQuantity = Math.ceil(newValue / unitValue);
//             if (
//               stock !== undefined &&
//               requiredQuantity + (currentQuantity ?? 0) <= stock
//             ) {
//               setQuantity(requiredQuantity);
//             }
//           }else if(salesUnit === "group" && unitValue !== undefined && setQuantity){
//             setInputValue(Math.ceil(newValue));
//             const requiredQuantity = Math.ceil(newValue / unitValue);
//             if (
//               stock !== undefined &&
//               requiredQuantity + (currentQuantity ?? 0) <= stock
//             ) {
//               setQuantity(requiredQuantity);
//             }
//           }
//         }
//       }
//     }
//   };
// }

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
            console.log("hola");
            
            setInputValue(Math.ceil(newValue));
          }
        }
      }
    }
  };
}

export function HandleIncrement(
  quantity: number,
  setQuantity: (value: number) => void,
  setInputValue: (value: number) => void,
  product: { salesUnit: string; unitValue?: number; stock: number }
) {
  if (product.stock > quantity) {
    const { salesUnit, unitValue } = product;

    if (salesUnit === "unit") {
      // Incremento simple
      setQuantity(quantity + 1);
    } else if (unitValue !== undefined) {
      const newQuantity = quantity + 1;

      if (salesUnit === "group") {
        setQuantity(newQuantity);
        setInputValue(newQuantity * unitValue);
      } else if (salesUnit === "area") {
        const newInputValue = parseFloat((newQuantity * unitValue).toFixed(2));
        setInputValue(parseFloat(newInputValue.toFixed(2)));
        setQuantity(Math.ceil(newInputValue / unitValue));
      }
    }
  }
}

export function HandleDecrement(
  quantity: number,
  setQuantity: (value: number) => void,
  setInputValue: (value: number) => void,
  product: { salesUnit: string; unitValue?: number }
) {
  if (quantity > 0) {
    const { salesUnit, unitValue } = product;
    const newQuantity = quantity - 1;

    if (salesUnit === "unit") {
      setQuantity(newQuantity);
    } else if (unitValue !== undefined) {
      if (salesUnit === "group") {
        setQuantity(newQuantity);
        setInputValue(newQuantity * unitValue);
      } else if (salesUnit === "area") {
        const newInputValue = parseFloat((newQuantity * unitValue).toFixed(2));
        setInputValue(parseFloat(newInputValue.toFixed(2)));
        setQuantity(Math.ceil(newInputValue / unitValue));
      }
    }
  }
}

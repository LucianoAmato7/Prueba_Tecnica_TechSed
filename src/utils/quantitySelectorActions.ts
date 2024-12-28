// Manejar los eventos de incremento y decremento de la cantidad de productos en el carrito.

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

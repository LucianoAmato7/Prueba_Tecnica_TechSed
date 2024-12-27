import { Product } from "@/types/product";

// Funciones para renderizar textos dinámicos dependiendo de la unidad de venta del producto
// y para validar la entrada de datos en el input de cantidad

//Valida que el input sea un número con 4 dígitos enteros y 2 decimales si la unidad de venta es por area
export function handleInputChangeFactory(salesUnit: Product["salesUnit"]) {
  return function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setInputValue: (value: number) => void
  ) {
    const value = e.target.value;
    let regex;

    if (salesUnit === "area") {
      regex = /^\d{0,4}(\.\d{0,2})?$/; // Permitir 4 dígitos enteros y 2 decimales
    } else {
      regex = /^\d{0,4}$/; // Permitir solo 4 dígitos enteros
    }

    if (regex.test(value)) {
      const newValue = value === "" ? 0 : parseFloat(value);
      console.log(newValue);

      if (!isNaN(newValue)) {
        setInputValue(newValue);
      }
    }
  };
}

export function GetFieldDescription(salesUnit: Product["salesUnit"]) {
  let unit;
  if (salesUnit === "group") {
    unit = "unidades";
  } else if (salesUnit === "area") {
    unit = "m²";
  }
  return unit;
}

export function GetTittleToField(salesUnit: Product["salesUnit"]) {
  let tittle;
  if (salesUnit === "group") {
    tittle = "Cantidad de Unidades";
  } else if (salesUnit === "area") {
    tittle = "Superficie";
  }
  return tittle;
}

export function GetPackageDescription(salesUnit: Product["salesUnit"]) {
  let packageDescription;
  if (salesUnit === "group") {
    packageDescription = "Cantidad de pallets";
  } else if (salesUnit === "area") {
    packageDescription = "Cantidad de cajas";
  } else if (salesUnit === "unit") {
    packageDescription = "Cantidad de unidades";
  }
  return packageDescription;
}

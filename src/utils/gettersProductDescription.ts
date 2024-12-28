import { Product } from "@/types/product";

// Funciones para obtener descripciones dinámicas dependiendo de la unidad de venta del producto.

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

import {
  GetFieldDescription,
  GetPackageDescription,
  GetTittleToField,
} from "@/utils/gettersProductDescription";

// Test para las funciones de descripción de productos.

describe("Product Description Functions", () => {
  describe("GetFieldDescription", () => {
    it("should return 'unidades' for salesUnit 'group'", () => {
      expect(GetFieldDescription("group")).toBe("unidades");
    });

    it("should return 'm²' for salesUnit 'area'", () => {
      expect(GetFieldDescription("area")).toBe("m²");
    });
  });

  describe("GetTittleToField", () => {
    it("should return 'Cantidad de Unidades' for salesUnit 'group'", () => {
      expect(GetTittleToField("group")).toBe("Cantidad de Unidades");
    });

    it("should return 'Superficie' for salesUnit 'area'", () => {
      expect(GetTittleToField("area")).toBe("Superficie");
    });
  });

  describe("GetPackageDescription", () => {
    it("should return 'Cantidad de pallets' for salesUnit 'group'", () => {
      expect(GetPackageDescription("group")).toBe("Cantidad de pallets");
    });

    it("should return 'Cantidad de cajas' for salesUnit 'area'", () => {
      expect(GetPackageDescription("area")).toBe("Cantidad de cajas");
    });

    it("should return 'Cantidad de unidades' for salesUnit 'unit'", () => {
      expect(GetPackageDescription("unit")).toBe("Cantidad de unidades");
    });
  });
});

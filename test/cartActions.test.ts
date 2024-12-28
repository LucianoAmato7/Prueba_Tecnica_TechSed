import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { addToCart, removeFromCart } from "@/utils/cartActions";

// Test para las funciones de agregar y eliminar productos del carrito.

describe("Cart Functions", () => {
  let mockCart: Cart;
  let mockSetCart: jest.Mock;

  beforeEach(() => {
    mockCart = { id: "id1", items: [], createdAt: new Date() };
    mockSetCart = jest.fn();
  });

  describe("addToCart", () => {
    it("should add a new product to the cart", () => {
        const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 10, salesUnit: "unit", image: "url/image" };
        addToCart(product, 2, mockCart, mockSetCart);

      expect(mockSetCart).toHaveBeenCalledWith({
        ...mockCart,
        items: [{ product, quantity: 2 }],
      });
    });

    it("should update the quantity if the product is already in the cart", () => {
        const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 10, salesUnit: "unit", image: "url/image" };
        mockCart.items = [{ product, quantity: 1 }];

      addToCart(product, 3, mockCart, mockSetCart);

      expect(mockSetCart).toHaveBeenCalledWith({
        ...mockCart,
        items: [{ product, quantity: 3 }],
      });
    });

    it("should not add a product if stock is insufficient", () => {
        const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 2, salesUnit: "unit", image: "url/image" };

      addToCart(product, 3, mockCart, mockSetCart);

      expect(mockSetCart).not.toHaveBeenCalled();
    });

    it("should not add a product if quantity is 0 or less", () => {
        const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 10, salesUnit: "unit", image: "url/image" };

      addToCart(product, 0, mockCart, mockSetCart);

      expect(mockSetCart).not.toHaveBeenCalled();
    });
  });

  describe("removeFromCart", () => {
    it("should remove a product from the cart by ID", () => {
        const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 10, salesUnit: "unit", image: "url/image" };
        mockCart.items = [{ product, quantity: 2 }];

      removeFromCart("1", mockCart, mockSetCart);

      expect(mockSetCart).toHaveBeenCalledWith({
        ...mockCart,
        items: [],
      });
    });

    it("should not modify the cart if the product ID does not exist", () => {
      const product: Product = { id: "1", title: "Product 1", description: "description1", price: 123, stock: 10, salesUnit: "unit", image: "url/image" };
      mockCart.items = [{ product, quantity: 2 }];

      removeFromCart("2", mockCart, mockSetCart);

      expect(mockSetCart).toHaveBeenCalledWith(mockCart);
    });

    it("should not modify the cart if the cart is empty", () => {
        mockCart.items = [];
      
        removeFromCart("1", mockCart, mockSetCart);
      
        expect(mockSetCart).not.toHaveBeenCalledWith(mockCart);
    });         
  });
});

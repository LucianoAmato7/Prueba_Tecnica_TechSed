import { HandleIncrement, HandleDecrement } from "@/utils/quantitySelectorActions";

// Test para las funciones de incremento y decremento de cantidad.
describe("HandleIncrement", () => {
  it("should increment quantity and inputValue for 'group' sales unit", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "group",
      unitValue: 2,
      stock: 10,
    };

    HandleIncrement(2, setQuantity, setInputValue, product);

    expect(setQuantity).toHaveBeenCalledWith(3); 
    expect(setInputValue).toHaveBeenCalledWith(6); 
  });

  it("should increment quantity and calculate inputValue for 'area' sales unit", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "area",
      unitValue: 1.5,
      stock: 10,
    };

    HandleIncrement(2, setQuantity, setInputValue, product);

    expect(setQuantity).toHaveBeenCalledWith(3); 
    expect(setInputValue).toHaveBeenCalledWith(4.5);
  });

  it("should not increment if stock is reached", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "unit",
      unitValue: 1,
      stock: 2,
    };

    HandleIncrement(2, setQuantity, setInputValue, product);

    expect(setQuantity).not.toHaveBeenCalled();
  });
});

describe("HandleDecrement", () => {
  it("should decrement quantity and inputValue for 'group' sales unit", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "group",
      unitValue: 2,
      stock: 10,
    };

    HandleDecrement(3, setQuantity, setInputValue, product);

    expect(setQuantity).toHaveBeenCalledWith(2); 
    expect(setInputValue).toHaveBeenCalledWith(4); 
  });

  it("should decrement quantity and calculate inputValue for 'area' sales unit", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "area",
      unitValue: 1.5,
      stock: 10,
    };

    HandleDecrement(3, setQuantity, setInputValue, product);

    expect(setQuantity).toHaveBeenCalledWith(2); 
    expect(setInputValue).toHaveBeenCalledWith(3); 
  });

  it("should not decrement if quantity is 0", () => {
    const setQuantity = jest.fn();
    const setInputValue = jest.fn();
    const product = {
      salesUnit: "unit",
      unitValue: 1,
      stock: 10,
    };

    HandleDecrement(0, setQuantity, setInputValue, product);

    expect(setQuantity).not.toHaveBeenCalled();
    expect(setInputValue).not.toHaveBeenCalled();
  });
});

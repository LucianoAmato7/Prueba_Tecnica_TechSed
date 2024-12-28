import { handleInputChangeFactory } from "@/utils/inputValueActions";

// Test para la función del handler de cambio en el input de cantidad.

describe("handleInputChangeFactory", () => {
  let setQuantity: jest.Mock;
  let setInputValue: jest.Mock;

  beforeEach(() => {
    setQuantity = jest.fn();
    setInputValue = jest.fn();
  });

  it("should update quantity and input value for 'group' salesUnit", () => {
    const handleInputChange = handleInputChangeFactory(
      "group",
      1, // unitValue
      setQuantity,
      10 // stock
    );

    const event = { target: { value: "5" } } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event, setInputValue);

    // Verificamos que setQuantity se haya llamado con la cantidad correcta
    expect(setQuantity).toHaveBeenCalledWith(5);

    // Verificamos que setInputValue se haya llamado con el valor ajustado
    expect(setInputValue).toHaveBeenCalledWith(5);
  });

  it("should update quantity and input value for 'area' salesUnit", () => {
    const handleInputChange = handleInputChangeFactory(
      "area",
      1, // unitValue
      setQuantity,
      10 // stock
    );

    const event = { target: { value: "4.5" } } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event, setInputValue);

    // Verificamos que setQuantity se haya llamado con la cantidad correcta (en función de unitValue)
    expect(setQuantity).toHaveBeenCalledWith(5);

    // Verificamos que setInputValue se haya llamado con el valor de área
    expect(setInputValue).toHaveBeenCalledWith(4.5);
  });

  it("should not update quantity if the value exceeds max stock", () => {
    const handleInputChange = handleInputChangeFactory(
      "group",
      1, // unitValue
      setQuantity,
      10 // stock
    );

    const event = { target: { value: "15" } } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event, setInputValue);

    // Verificamos que setQuantity no haya sido llamada porque el valor excede el stock máximo
    expect(setQuantity).not.toHaveBeenCalled();
    expect(setInputValue).not.toHaveBeenCalled();
  });

  it("should not update quantity if the value is invalid", () => {
    const handleInputChange = handleInputChangeFactory(
      "group",
      1, // unitValue
      setQuantity,
      10 // stock
    );

    const event = { target: { value: "invalidValue" } } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event, setInputValue);

    // Verificamos que setQuantity y setInputValue no se hayan llamado
    expect(setQuantity).not.toHaveBeenCalled();
    expect(setInputValue).not.toHaveBeenCalled();
  });

  it("should update input value to 0 if the value is empty", () => {
    const handleInputChange = handleInputChangeFactory(
      "group",
      1, // unitValue
      setQuantity,
      10 // stock
    );

    const event = { target: { value: "" } } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(event, setInputValue);

    // Verificamos que el valor de input se haya establecido a 0
    expect(setInputValue).toHaveBeenCalledWith(0);
  });
});

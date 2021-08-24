function capitalization(text) {
  if (!text) return "";
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

test("capitalization Test 1", () => {
  const text = "canada"; //Arrange
  const result = capitalization(text); //Act
  expect(result).toBe("Canada"); //Assert
});

test("capitalization Test 2", () => {
  const text = "";
  expect(capitalization(text)).toBe("");
});

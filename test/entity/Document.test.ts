import Document from "../../src/core/entity/Document";

test("Should create document with correct value", () => {
  const document = new Document("14.321.321/0001-23");
  expect(document).toBeInstanceOf(Document);
});

test("Should return error when document is invalid", () => {
  const result = () => new Document("14.321.321/0001");

  expect(result).toThrowError("Invalid Document");
});

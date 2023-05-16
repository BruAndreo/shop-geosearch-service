
const CORRECT_SIZE_DOCUMENT = 14;

export default class Document {
  private value!: string;

  constructor(value: string) {
    this.setValue(value);
  }

  private setValue(value: string) {
    const valueClean = this.clear(value);

    if (!this.hasCorrectSize(valueClean.length)) {
      throw new Error("Invalid Document");
    }
    this.value = valueClean;
  }

  private clear(value: string) {
    return value.replace(/\D||[A-Za-z]/g, "");
  }

  private hasCorrectSize(size: number) {
    return size === CORRECT_SIZE_DOCUMENT;
  }

  public getValue() { return this.value }
}

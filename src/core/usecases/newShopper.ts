import ShopperRepository from "../../infra/database/ShopperRepository";
import Document from "../entity/Document";
import Shopper from "../entity/Shopper";

export default class NewShopper {
  constructor(readonly repository: ShopperRepository) {}

  public async create(input: NewShopperModel): Promise<string> {
    const shopper = Shopper.create(input);

    const existentShopper = await this.isShopperExists(input.document);
    if (existentShopper) {
      throw new Error("Shopper already exists");
    }

    await this.repository.createShopper(shopper);
    return shopper.getId();
  }

  private async isShopperExists(document: string): Promise<boolean> {
    const doc = new Document(document);
    return await this.repository.existsDocument(doc.getValue());
  }
}

export type NewShopperModel = {
  tradingName: string,
  ownerName: string,
  document: string,
  coverageArea: any,
  address: any
};

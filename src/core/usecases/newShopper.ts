import ShopperRepository from "../../infra/database/ShopperRepository";
import Shopper from "../entity/Shopper";

export default class NewShopper {
  constructor(readonly repository: ShopperRepository) {}

  public async create(input: NewShopperModel): Promise<string> {
    try {
      const shopper = Shopper.create(input);

      await this.repository.createShopper(shopper);
      return shopper.getId();
    } catch (e: any) {
      throw new Error(e.message);
    }

  }
}

export type NewShopperModel = {
  tradingName: string,
  ownerName: string,
  document: string,
  coverageArea: any,
  address: any
};

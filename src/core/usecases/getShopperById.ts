import { StringMap } from "ts-jest";
import ShopperRepository from "../../infra/database/ShopperRepository";
import Shopper from "../entity/Shopper";

export default class GetShopperById {

  constructor(readonly repository: ShopperRepository) {
  }

  public async get (id: string): Promise<ShopperModel> {
    const shopper = await this.repository.getShopperById(id);
    if (!shopper) {
      throw new Error("This shopper id not exist");
    }
    return {
      id: shopper.getId(),
      tradingName: shopper.getTradingName(),
      ownerName: shopper.getOwnerName(),
      document: shopper.getDocument(),
      coverageArea: shopper.getCoverageArea(),
      address: shopper.getAddress()
    };
  }
}

export type ShopperModel = {
  id: string,
  tradingName: string,
  ownerName: string,
  document: string,
  coverageArea: any,
  address: any
};

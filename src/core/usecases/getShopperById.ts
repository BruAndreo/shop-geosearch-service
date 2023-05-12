import ShopperRepository from "../../infra/database/ShopperRepository";
import Shopper from "../entity/Shopper";

export default class GetShopperById {

  constructor(readonly repository: ShopperRepository) {
  }

  public async get (id: string): Promise<Shopper> {
    const shopper = await this.repository.getShopperById(id);
    if (!shopper) {
      throw new Error("This shopper id not exist");
    }
    return shopper;
  }
}

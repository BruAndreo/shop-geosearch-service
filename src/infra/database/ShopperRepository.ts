import Shopper from "../../core/entity/Shopper";

export default interface ShopperRepository {
  getShopperById(id: string): Promise<Shopper|null>
}

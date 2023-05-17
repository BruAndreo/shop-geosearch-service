import Shopper from "../../core/entity/Shopper";

export default interface ShopperRepository {
  getShopperById(id: string): Promise<Shopper|null>
  existsDocument(document: string): Promise<boolean>
  createShopper(input: Shopper): Promise<void>
}

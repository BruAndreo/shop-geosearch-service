import Shopper from "../../core/entity/Shopper"
import ShopperRepository from "./ShopperRepository";

export default class ShopperRepositoryJSON implements ShopperRepository {
  async getShopperById(id: string): Promise<Shopper | null> {
    const shopperInfo = DATAS.find(shopper => shopper.id == id);
    return new Promise(resolve => resolve(!shopperInfo ? null :
      new Shopper(
        shopperInfo.id,
        shopperInfo.tradingName,
        shopperInfo.ownerName,
        shopperInfo.document,
        shopperInfo.coverageArea,
        shopperInfo.address
      )
    ));
  }
}

const DATAS = [{
  "id": "1",
  "tradingName": "Adega da Cerveja - Pinheiros",
  "ownerName": "Zé da Silva",
  "document": "1432132123891/0001",
  "coverageArea": {
    "type": "MultiPolygon",
    "coordinates": [
      [[[30, 20], [45, 40], [10, 40], [30, 20]]],
      [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
    ]
  },
  "address": {
    "type": "Point",
    "coordinates": [-46.57421, -21.785741]
  }
}];

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

  async createShopper(input: Shopper): Promise<void> {
    const newShopper: ShopperDataModel = {
      id: input.getId(),
      tradingName: input.getTradingName(),
      ownerName: input.getOwnerName(),
      document: input.getDocument(),
      coverageArea: input.getCoverageArea(),
      address: input.getAddress(),
      active: true,
      createdAt: new Date()
    };
    DATAS.push(newShopper);
    return new Promise(resolve => resolve());
  }
}

const DATAS: ShopperDataModel[] = [{
  id: "1",
  tradingName: "Adega da Cerveja - Pinheiros",
  ownerName: "Zé da Silva",
  document: "14.321.123/0001-23",
  coverageArea: {
    "type": "MultiPolygon",
    "coordinates": [
      [[[30, 20], [45, 40], [10, 40], [30, 20]]],
      [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
    ]
  },
  address: {
    "type": "Point",
    "coordinates": [-46.57421, -21.785741]
  },
  active: true,
  createdAt: new Date("2023-05-01")
}];

type ShopperDataModel = {
  id: string,
  tradingName: string,
  ownerName: string,
  document: string,
  coverageArea: any,
  address: any,
  active: boolean | null,
  createdAt: Date | null
};

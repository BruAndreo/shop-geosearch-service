import GetShopperById from "../../src/core/usecases/getShopperById";
import NewShopper, { NewShopperModel } from "../../src/core/usecases/newShopper";
import ShopperRepositoryJSON from "../../src/infra/database/ShopperRepositoryJSON";

test("Should create new Shopper and return ID", async () => {
  const repository = new ShopperRepositoryJSON()
  const newShopper = new NewShopper(repository);
  const getShopperById = new GetShopperById(repository)

  const shopper: NewShopperModel = {
    tradingName: "Adega da Cerveja - Pinheiros",
    ownerName: "Zé da Silva",
    document: "1432132123891/0001",
    coverageArea: {
      type: "MultiPolygon",
      coordinates: [
        [[[30, 20], [45, 40], [10, 40], [30, 20]]],
        [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
      ]
    },
    address: {
      type: "Point",
      coordinates: [-46.57421, -21.785741]
    }
  };

  const result = await newShopper.create(shopper);

  expect(result).toBeTruthy();

  const resultShopper = await getShopperById.get(result);

  expect(resultShopper.id).toBe(result);
  expect(resultShopper.tradingName).toBe(shopper.tradingName);
  expect(resultShopper.ownerName).toBe(shopper.ownerName);
  expect(resultShopper.document).toBe(shopper.document);
});

test.todo("Shouldn't create a new shopper without any information");
test.todo("Shouldn't create a new shopper with document(CNPJ) invalid");
test.todo("Shouldn't create a new shopper if already exists");
test.todo("Shouldn't create a new shopper without `coverageArea` in GeoJSON format");
test.todo("Shouldn't create a new shopper without `address` in GeoJSON format");

import GetShopperById from "../../src/core/usecases/getShopperById";
import ShopperRepositoryJSON from "../../src/infra/database/ShopperRepositoryJSON";

test("Should get a shopper by ID", async () => {
  const getShopperById = new GetShopperById(new ShopperRepositoryJSON());

  const result = await getShopperById.get("1");

  expect(result.id).toBe("1");
  expect(result.tradingName).toBeTruthy();
  expect(result.ownerName).toBeTruthy();
  expect(result.document).toBeTruthy();
  expect(result.coverageArea).toBeTruthy();
  expect(result.address).toBeTruthy();
});

test("Should get error when ID not exists", async () => {
  const getShopperById = new GetShopperById(new ShopperRepositoryJSON());

  const result = async () => await getShopperById.get("not-existant-id");

  await expect(result).rejects.toThrow(new Error("This shopper id not exist"));
});

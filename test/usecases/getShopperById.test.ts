import GetShopperById from "../../src/core/usecases/getShopperById";
import ShopperRepositoryJSON from "../../src/infra/database/ShopperRepositoryJSON";

test.todo("Should get a shopper by ID");

test("Should get error when ID not exists", async () => {
  const getShopperById = new GetShopperById(new ShopperRepositoryJSON());

  const result = async () => await getShopperById.get("not-existant-id");

  await expect(result).rejects.toThrow(new Error("This shopper id not exist"));
});

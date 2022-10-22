import { Remult } from "remult";
import ProductSeeder from "./ProductSeeder";

const seed = async (remult: Remult) => {
  await ProductSeeder(remult);
};

export default seed;

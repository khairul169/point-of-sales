import { Remult } from "remult";
import ProductSeeder from "./ProductSeeder";

const seeders = async (remult: Remult) => {
  await ProductSeeder(remult);
};

export default seeders;

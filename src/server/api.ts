import { remultExpress } from "remult/remult-express";
import Category from "../shared/models/Category";
import Product from "../shared/models/Product";
import ProductVariant from "../shared/models/ProductVariant";
import seeders from "./seeders";

const entities = [Category, Product, ProductVariant];

export const api = remultExpress({
  entities,
  initApi: seeders,
});

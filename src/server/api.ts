import { remultExpress } from "remult/remult-express";
import Category from "../shared/models/Category";
import Product from "../shared/models/Product";
import ProductVariant from "../shared/models/ProductVariant";
import seed from "./seeders";

const entities = [Category, Product, ProductVariant];

export const api = remultExpress({
  entities,
  initApi: seed,
});

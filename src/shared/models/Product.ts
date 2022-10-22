import { Allow, Entity, Field, Fields } from "remult";
import Category from "./Category";
import ProductVariant from "./ProductVariant";

@Entity("products", { allowApiCrud: Allow.authenticated, allowApiRead: true })
class Product {
  @Fields.autoIncrement()
  id!: number;

  @Field(() => Category)
  category!: Category;

  @Fields.string()
  name = "";

  @Fields.object((options, remult) => {
    options.serverExpression = async (product) => {
      return remult
        .repo(ProductVariant)
        .find({ where: { productId: product.id } });
    };
  })
  variants: ProductVariant[] = [];

  @Fields.date()
  createdAt = new Date();

  @Fields.date()
  deletedAt?: Date;
}

export default Product;

import { Allow, Entity, Fields } from "remult";

@Entity("product_variants", {
  allowApiCrud: Allow.authenticated,
  allowApiRead: true,
})
class ProductVariant {
  @Fields.autoIncrement()
  id!: number;

  @Fields.number()
  productId = 0;

  @Fields.string()
  name = "";

  @Fields.number()
  price = 0;

  @Fields.date()
  createdAt = new Date();

  @Fields.date()
  deletedAt?: Date;
}

export default ProductVariant;

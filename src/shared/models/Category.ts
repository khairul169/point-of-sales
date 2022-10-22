import { Allow, Entity, Fields } from "remult";

@Entity("categories", { allowApiCrud: Allow.authenticated, allowApiRead: true })
class Category {
  @Fields.autoIncrement()
  id!: number;

  @Fields.string()
  name = "";

  @Fields.date()
  createdAt = new Date();

  @Fields.date()
  deletedAt?: Date;
}

export default Category;

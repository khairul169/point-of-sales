import { Remult } from "remult";
import Category from "../../shared/models/Category";
import Product from "../../shared/models/Product";
import ProductVariant from "../../shared/models/ProductVariant";

const ProductSeeder = async (remult: Remult) => {
  const categoryRepo = remult.repo(Category);
  const productRepo = remult.repo(Product);
  const variantRepo = remult.repo(ProductVariant);

  if ((await productRepo.count()) > 0) {
    return;
  }

  const categories = await categoryRepo.insert([
    { name: "Makanan" },
    { name: "Minuman" },
  ]);

  const productMocks = [
    {
      name: "Nasi Goreng",
      category: categories[0],
      variants: [
        { name: "Biasa", price: 12000 },
        { name: "Jumbo", price: 15000 },
      ],
    },
    {
      name: "Mie Ayam",
      category: categories[0],
      variants: [
        { name: "Biasa", price: 12000 },
        { name: "Bakso", price: 15000 },
      ],
    },
    {
      name: "Teh",
      category: categories[1],
      variants: [
        { name: "Hangat", price: 4000 },
        { name: "Dingin", price: 5000 },
      ],
    },
  ];

  let promises = productMocks.map(async (item) => {
    const product = await productRepo.insert({
      name: item.name,
      category: item.category,
    });

    for (let variant of item.variants) {
      await variantRepo.insert({
        productId: product.id,
        name: variant.name,
        price: variant.price,
      });
    }
  });

  await Promise.all(promises);
};

export default ProductSeeder;

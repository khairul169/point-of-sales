import { remult } from "remult";
import create from "zustand";
import { persist } from "zustand/middleware";
import Product from "../../shared/models/Product";

interface ProductListState {
  products: Product[] | null;
  fetchProducts: () => void;
}

const getProducts = () => {
  return remult.repo(Product).find({ orderBy: { name: "asc" } });
};

const useProducts = create<ProductListState>()(
  persist(
    (set) => ({
      products: null,

      fetchProducts: () => {
        getProducts().then((products) => set({ products }));
      },
    }),
    { name: "products" }
  )
);

export default useProducts;

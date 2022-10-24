import create from "zustand";
import { persist } from "zustand/middleware";
import Product from "../../shared/models/Product";
import ProductVariant from "../../shared/models/ProductVariant";

export interface IBillingCartItem {
  product: Product;
  variant: ProductVariant;
  price: number;
  quantity: number;
  total: number;
}

interface BillingCartState {
  items: IBillingCartItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;

  addItem: (item: IBillingCartItem) => void;
  updateItem: (idx: number, values: any) => void;
}

const calculateTotal = (state: BillingCartState) => {
  const subtotal = state.items.reduce((a, b) => a + b.total, 0);
  let total = subtotal - state.discount;
  const tax = total * 0.11;
  total += tax;
  return { subtotal, tax, total };
};

const useBillingCart = create<BillingCartState>()(
  persist(
    (set) => ({
      items: [],
      subtotal: 0,
      discount: 0,
      tax: 0,
      total: 0,

      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      updateItem: (idx, values) =>
        set((state) => {
          const items = [...state.items];
          items[idx] = { ...items[idx], ...values };
          items[idx].total = items[idx].price * items[idx].quantity;

          if (items[idx].quantity <= 0) {
            items.splice(idx, 1);
          }

          state.items = items;
          const { subtotal, tax, total } = calculateTotal(state);
          return { items, subtotal, tax, total };
        }),
    }),
    { name: "billing_cart" }
  )
);

export default useBillingCart;

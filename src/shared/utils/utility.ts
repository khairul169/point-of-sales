export const formatCurrency = (money?: number | null) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money == null ? 0 : money);
};

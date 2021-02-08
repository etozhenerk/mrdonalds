export const totalPriceItems = (order) => order.price * order.count;

export const formatCurrency = (currency) =>
  currency.toLocaleString("ru-Ru", { style: "currency", currency: "RUB" });

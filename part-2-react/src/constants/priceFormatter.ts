export const formatPrice = (price?: number) => {
  return price?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".") || "0";
};

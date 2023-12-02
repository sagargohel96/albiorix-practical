import { useSelector } from "react-redux";
import { Product } from "../data";

export const useTextSearch = (text: string) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );
  const filteredSearch = products.filter(
    (product: Product) =>
      (text.length >= 3 &&
        product.name.toLowerCase().includes(text.toLowerCase())) ||
      product.description.toLowerCase().includes(text.toLowerCase())
  );
  return filteredSearch;
};

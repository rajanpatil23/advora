import ProductToolDetail from "@/components/products/ProductToolDetail";
import { productToolsById } from "@/data/productTools";

export default function Tool1() {
  return <ProductToolDetail tool={productToolsById["invoice-suite"]} />;
}

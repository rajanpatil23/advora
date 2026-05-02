import ProductToolDetail from "@/components/products/ProductToolDetail";
import { productToolsById } from "@/data/productTools";

export default function Tool3() {
  return <ProductToolDetail tool={productToolsById["service-desk"]} />;
}

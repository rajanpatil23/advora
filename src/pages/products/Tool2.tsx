import ProductToolDetail from "@/components/products/ProductToolDetail";
import { productToolsById } from "@/data/productTools";

export default function Tool2() {
  return <ProductToolDetail tool={productToolsById["warehouse-management"]} />;
}

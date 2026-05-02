import ProductToolDetail from "@/components/products/ProductToolDetail";
import { productToolsById } from "@/data/productTools";

export default function Tool4() {
  return <ProductToolDetail tool={productToolsById["claims-os"]} />;
}

import { productByCategory } from "@/services/product";
import CommonListing from "@/components/CommonListing";
export default async function MEnAllProducts() {
  const getAllProduts = await productByCategory("women");
  return <CommonListing data={getAllProduts && getAllProduts.data} />;
}

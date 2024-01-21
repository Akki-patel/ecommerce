import { productByCategory } from "@/services/product";
import CommonListing from "@/components/CommonListing";
export default async function MEnAllProducts() {
  const getAllProduts = await productByCategory("men");
  return <CommonListing data={getAllProduts && getAllProduts.data} />;
}

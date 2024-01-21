import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

export default async function AllProducts() {
  const getAllProduts = await getAllAdminProducts();
  return <CommonListing data={getAllProduts && getAllProduts.data} />;
}

import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product/index";



export default async function AdminAllProducts() {

  const allAdminProducts = await getAllAdminProducts()

  return <CommonListing data={allAdminProducts && allAdminProducts.data}/>
}
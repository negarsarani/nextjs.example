import { useRouter } from "next/dist/client/router";

function ProductDetail(params) {
  const router = useRouter()

  return <div>product Detail {router.query.id}</div>;
}
export default ProductDetail;

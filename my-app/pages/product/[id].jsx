import { useRouter } from 'next/router';
function ProductDetail(params) {
  const router = useRouter();
  const productId = router.query.id;
  return <div>product Detail {productId}</div>;
}
export default ProductDetail;

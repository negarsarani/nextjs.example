import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
const Product = () => {
  const router = useRouter();
  const handleRouter = (id) => {
    router.push(`/product/${id}`);
  };
  return (
    <div>
      <Link href={'/product/1'}>p1</Link>

      <h3 onClick={() => handleRouter(2)}>P2</h3>
      <h3 onClick={() => handleRouter(4)}>P3</h3>
    </div>
  );
};

export default Product;

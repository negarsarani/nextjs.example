import Link from 'next/link';
const Product = () => {
  return (
    <div>
      <Link href={'/product/1'}>p1</Link>

      <h3>P2</h3>
      <h3>P3</h3>
    </div>
  );
};

export default Product;

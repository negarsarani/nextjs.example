import Link from 'next/link';
const Product = () => {
  return (
    <div className="flex flex-col">
      <Link href="/product/1">P1</Link>
      <Link href="/product/2">P2</Link>
      <Link href="/product/3" replace>P3</Link>
      // means go back to home page
    </div>
  );
};

export default Product;

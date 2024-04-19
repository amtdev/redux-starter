import ProductList from '@/components/ProductList';
import { getData } from '@/lib/getData';
import Link from 'next/link';
const HomePage = async () => {
  const products = (await getData('https://fakestoreapi.com/products')) ?? [];

  return (
    <div className="px-20 py-16 ">
      <h2 className="p-4 text-4xl font-bold">Hello From Redux Toolkit</h2>
      <div className="overflow-hidden bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800">
        <div className="flex items-center justify-between px-6 py-3 font-semibold border-b border-gray-300 bg-slate-100 dark:bg-gray-800 dark:border-gray-600 text-slate-800 dark:text-slate-100">
          <h2>Products</h2>
          <Link
            className="px-4 py-2 transition-all duration-300 rounded-md bg-lime-600 hover:bg-lime-800 text-slate-50"
            href="/cart"
          >
            View Cart (0)
          </Link>
        </div>
        <div className="p-4 bg-white dark:bg-slate-700">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

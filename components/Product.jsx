'use client';
import { addToCart } from '@/redux/slices/cartSlice';
import { BaggageClaim } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Product({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    console.log(product);
    dispatch(addToCart(product));
  }
  return (
    <div className="mr-3 overflow-hidden bg-white border rounded-lg shadow dark:bg-slate-900">
      <Link href="#">
        <Image
          src={product.image}
          alt={product.title}
          width={556}
          height={556}
          className="object-cover w-full h-48"
        />
      </Link>
      <div className="px-4">
        <Link href={`/products/${product.slug}`}>
          <h2 className="my-2 font-semibold text-center dark:text-slate-200 text-slate-800">
            {product.title}
          </h2>
        </Link>
        <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
          <p>$ {product.price}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center px-4 py-2 space-x-2 text-white rounded-md bg-lime-600"
          >
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

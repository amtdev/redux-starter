'use client';
import Breadcrumb from '@/components/Breadcrumb';
import CartProduct from '@/components/CartProduct';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);
  console.log(cartItems);
  const dispatch = useDispatch();

  function handleRemoveCartItem(cartId) {
    dispatch(removeFromCart(cartId));
  }
  function handleIncrementQty(cartId) {
    dispatch(incrementQty(cartId));
  }
  function handleDecrementQty(cartId) {
    dispatch(decrementQty(cartId));
  }

  return (
    <div className="px-20 py-16">
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-14">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between pb-3 mb-4 text-sm font-semibold border-b border-slate-400 text-slate-400">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* CART1 */}
            {cartItems.map((item, i) => {
              return <CartProduct cartItem={item} key={i} />;
            })}
          </div>
          {/* COUPON FORM */}
          <div className="flex items-center gap-2 py-8">
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
              placeholder="Enter Coupon"
            />
            <button className="shrink-0 py-2.5 px-4 rounded-lg bg-lime-600">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="hidden col-span-4 p-5 overflow-hidden font-bold bg-white border border-gray-300 rounded-lg sm:block dark:bg-gray-700 dark:border-gray-700 text-slate-800 dark:text-slate-100">
          <h2 className="pb-3 text-2xl">Cart total</h2>
          <div className="flex items-center justify-between pb-6 border-b border-slate-500">
            <span>Subtotal </span>
            <span>$ {subTotal}</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span>Tax </span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span>Shipping </span>
            <span>$10</span>
          </div>
          <p className="pb-6 font-normal border-b border-slate-500 text-slate-400">
            We only charge for shipping when you have over 2kg items
          </p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total </span>
            <span>$1000</span>
          </div>
          <Link
            href="#"
            className="px-4 py-2 font-normal rounded-lg bg-slate-200 text-slate-900"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

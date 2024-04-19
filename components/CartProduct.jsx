import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartProduct({ cartItem }) {
  return (
    <div className="flex items-center justify-between pb-3 mb-4 text-sm font-semibold border-b border-slate-400">
      <div className="flex items-center gap-3">
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="w-20 h-20 rounded-xl"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
        </div>
      </div>
      <div className="flex items-center gap-3 border border-gray-400 rounded-xl">
        <button className="px-4 py-2 border-r border-gray-400">
          <Minus />
        </button>
        <p className="flex-grow px-4 py-2">1</p>
        <button className="px-4 py-2 border-l border-gray-400">
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4>{cartItem.price}</h4>
        <button>
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
}

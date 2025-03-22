import Link from 'next/link';
import React, { useState } from 'react';

export interface Product {
  images: any;
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  category: string[] | any;
  description: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
  <Link href={`/product-details/${product.id}`} className="border rounded-lg overflow-hidden shadow-md">
    <img
     src={product.images[0]?.url}
     alt="images"
       className="w-full h-48 object-cover"
     />
<div className="p-4">
<h2 className="text-xs font-semibold">{product.name}</h2>
<p className="text-gray-600 text-sm">
    {new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(product.price)}   
</p>
{/* <p className="text-gray-600 font-semibold text-xs">{product?.category?.name}</p> */}
   <h6 className='text-xs font-light'>{product.category.name}</h6>  
</div>
</Link>
  );
};

export default ProductCard;

"use client"
import React, { useEffect, useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import Pagination from './Pagination';
import GlobalApi from '@/lib/GlobalApi';
import Link from 'next/link';


// const products = [
//   // Array of product objects (at least 12 for demonstration)
//   {
//     id: 1,
//     name: 'Nike Air',
//     price: 35000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fHww',
//     quantity: 10,
//     category: "Shoes",
//     slug:"slug",
//     description:"A great product for modern times"
//   },
//   {
//     id: 2,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 3,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 4,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 5,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 6,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 7,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 8,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 9,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 10,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 11,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 12,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 13,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 14,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 15,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 16,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 17,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
//   {
//     id: 18,
//     name: 'Shirts',
//     price: 12000.99,
//     imageUrl: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
//     quantity: 6,
//     category: "Shirts",
//     slug:"slug",
//     description:"A great product for modern times"

//   },
// ];


const ClothesCategory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');



 useEffect(()=>{
    getProducts()
 },[])

 const getProducts = async() : Promise<void> =>{
    const result:any = await GlobalApi.getAllProducts()
    console.log(result)
    setProducts(result?.products)

}

  const productsPerPage = 12;

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Calculate total pages
//   const totalPages = Math.ceil(products.length / productsPerPage);
   // Calculate total pages based on filtered products
   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Clothes</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="mb-6 p-2 border border-gray-300 rounded-full text-xs "
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // Reset to first page on search
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
        <div key={product.id}>
        {product.category.name === "clothes" &&(
         <div>
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
      </div>
    </Link>
 </div> 
   )}
 </div>
   ))}
       
      </div>
       <div className='text-center'>
          <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
       </div>
    </div>
  );
};

export default ClothesCategory;

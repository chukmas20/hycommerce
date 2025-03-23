"use client";

import { useEffect, useState } from "react";
import GlobalApi from "@/lib/GlobalApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


const ProductDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  


  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // Resolve the params Promise
        setId(resolvedParams.id); // Extract and set the `id`
      } catch (error) {
        console.error("Error resolving params:", error);
      }
    };

    fetchParams();
  }, [params]);


  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) return;

      try {
        const result:any = await GlobalApi.getProductById(id); // Fetch product details
        setProduct(result?.product); // Set the product data
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProductDetails();
  }, [id]);

 
  
 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  
  return (
    <div className="mt-20" >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-3 p-4">
             <div>
             <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  autoplay={{
                    delay: 3000, // Slide will change every 3 seconds
                    disableOnInteraction: false, // Keep autoplay active after user interaction
                  }}
                  modules={[Navigation, Autoplay]}
                  className="w-full h-96 max-w-2xl mx-auto"
               >
                  {product.images.map((image:any, index:any) => (
                <SwiperSlide key={index}>
                    <img
                    src={image.url}
                    alt={`Product Image ${index + 1}`}
                    className="rounded-lg shadow-md w-full"
                    />
                </SwiperSlide>
               ))}
               </Swiper>
             </div>
               <div >
               <h1 className="text-md font-bold ">{product.name}</h1>
                  <p className="text-gray-700  text-sm">
                      {product.description}
                  </p>
                 <div className="flex items-center gap-3 ">
                 <p className="text-gray-600 font-bold text-sm " >
                      {new Intl.NumberFormat('en-NG', {
                          style: 'currency',
                          currency: 'NGN',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                      }).format(product.price)}
                  </p>
                  <p> <span className="font-bold text-sm">Quantity:</span> {product?.quantity}</p>
                 </div>
                 
                  <button 
                    className="mt-6 bg-black text-white px-6 py-2 mb-6 cursor-pointer rounded-full">
                      Add to Cart
                  </button>
              </div>
               </div>
               
             </div>
  );
};

export default ProductDetails;

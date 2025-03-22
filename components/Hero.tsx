import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/171300771/photo/casual-clothes-folded-in-pile-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=82roHsWULeKaPlpHrAjdJSad0vK7FQjxPlbBhz0JhCA=" // Replace with your image path
          alt="Clothing Line Banner"
          className='object-fit h-full w-full'
        />
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-96">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Discover Your Style
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Explore our latest collection of fashion-forward apparel.
          </p>
          <Link href="/shop">
            <Button className="inline-block px-8 py-3 mt-6 h-12 cursor-pointer text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

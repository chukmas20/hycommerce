"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-xl font-bold text-gray-800">BrandName</p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <p className="text-gray-800 hover:text-gray-600">Home</p>
            </Link>
            <Link href="/products">
              <p className="text-gray-800 hover:text-gray-600">Products</p>
            </Link>
            <Link href="/about">
              <p className="text-gray-800 hover:text-gray-600">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-800 hover:text-gray-600">Contact</p>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/">
            <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Home</p>
          </Link>
          <Link href="/products">
            <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Products</p>
          </Link>
          <Link href="/about">
            <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">About</p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Contact</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




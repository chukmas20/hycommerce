import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold hover:text-gray-400">
              BrandName
            </a>
          </div>
          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <nav className="flex space-x-4">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
              <a href="/products" className="hover:text-gray-400">
                Products
              </a>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </nav>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              {/* Replace with Facebook Icon */}
              FB
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              {/* Replace with Twitter Icon */}
              TW
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
              {/* Replace with Instagram Icon */}
              IG
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

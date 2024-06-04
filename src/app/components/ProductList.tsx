"use client";

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  image?: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl text-center font-bold mb-4 border-b pb-1">
        Our Products
      </h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg shadow-md overflow-hidden group"
          >
            {product.image && (
              <div
                className="cursor-pointer w-full"
                onClick={() => openModal(product.image!)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}
            <div className="absolute  duration-500 inset-0 bg-black/20 bg-opacity-20 flex flex-col items-center justify-center pointer-events-none">
              <h3 className="text-sm md:text-lg text-white text-center font-semibold">
                {product.id}. {product.name}
              </h3>
              <hr className="w-1/4 h-1 mt-2" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full">
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-black">
                &times;
              </button>
            </div>
            <img src={selectedImage} alt="Product" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

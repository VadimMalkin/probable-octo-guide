"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Carousel({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track if image is hovered
  const router = useRouter();

  const goToPrev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  // Set up the interval to go to the next image every 5 seconds
  useEffect(() => {
    // Stop the timer when image is hovered
    if (isHovered) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval); // Clear interval on unmount or when hover is active
  }, [index, isHovered]);

  return (
    <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-lg shadow mb-6 bg-gray-100">
      {products.map((product, i) => (
        <div
          key={product.id}
          onClick={() => router.push(`/products/${product.id}`)}
          className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          onMouseEnter={() => setIsHovered(true)} // Stop timer when hovering
          onMouseLeave={() => setIsHovered(false)} // Restart timer when leaving hover
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-6 bg-white"
          />
          {/* Product information */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h2 className="text-sm md:text-lg font-bold text-white">{product.title}</h2>
            <p className="text-xs md:text-sm mt-1 text-white">${product.price}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              i === index ? "bg-red-600" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow z-20 md:hidden"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow z-20 md:hidden"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}

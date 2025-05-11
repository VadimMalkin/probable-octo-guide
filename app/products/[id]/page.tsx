"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the product type
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

// Async function to fetch product details by id
async function fetchProductById(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login");
      return;
    }

    // Use params.id directly (no need for use() or promises)
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(params.id); // Fetching product data by id
        setProduct(productData);
      } catch (error) {
        console.error("Failed to load product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct(); // Calling the fetch function

  }, [params.id, router]); // This useEffect depends on the params.id

  if (loading) {
    return <div className="text-center mt-10">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6">
      <button
        onClick={() => router.push("/products")}
        className="mb-4 text-sm text-blue-600 hover:underline cursor-pointer"
      >
        ← Back to products
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full sm:w-1/3 h-64 object-contain mb-4 sm:mb-0"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2 capitalize text-sm sm:text-base">
            Category: {product.category}
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">{product.description}</p>
          <p className="text-xl sm:text-2xl font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}


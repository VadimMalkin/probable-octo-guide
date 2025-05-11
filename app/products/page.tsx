"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Carousel from "../components/carouselComponent";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login");
      return;
    }

    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json()
      ),
    ])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
      })
      .catch((err) => console.error("Failed to fetch", err))
      .finally(() => setLoading(false));
  }, [router]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  return (
    <div className="px-4 py-6">
      <Carousel products={products.slice(0, 5)} />

      {/* Filter */}
      <div className="mb-6">
        <label className="mr-2 font-semibold text-gray-700">Filter by:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-2 cursor-pointer"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4 transition-transform transform hover:scale-105"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600 mt-1 text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

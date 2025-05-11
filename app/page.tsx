"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext"; 

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleButtonClick = () => {
    router.push(isAuthenticated ? "/products" : "/login");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 sm:py-20 text-center bg-gray-50">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
        Welcome to GymBeam Store
      </h1>
      <p className="text-gray-600 mb-6 text-lg sm:text-xl max-w-xl">
        Explore quality supplements, gear, and wellness products. Log in to browse our full product range.
      </p>

      <button
        onClick={handleButtonClick}
        className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition cursor-pointer text-base sm:text-lg"
      >
        {isAuthenticated ? "View Products" : "Log In to Shop"}
      </button>
    </main>
  );
}


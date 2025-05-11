"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; 

export default function Header() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const goToLoginOrProducts = () => {
    router.push(isAuthenticated ? "/products" : "/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-black shadow-md">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold cursor-pointer flex-grow text-center md:text-left italic"
      >
        GymBeam Store
      </h1>

      <div className="flex items-center gap-4 md:gap-6 md:ml-auto">
        <button
          onClick={goToLoginOrProducts}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer text-sm md:text-base"
        >
          {isAuthenticated ? "View Products" : "Log In"}
        </button>
        {isAuthenticated && (
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer text-sm md:text-base"
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

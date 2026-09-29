'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBagHeart } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
    { name: "Sign Up", path: "/auth/signup" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            width={80}
            height={50}
            alt="Sukriya logo"
            className="h-auto w-16 object-contain sm:w-20"
          />
        </Link>

        <ul className="hidden items-center gap-5 text-sm font-medium text-gray-700 md:flex lg:gap-8">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className="text-[1.1rem] transition-colors hover:text-primary"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <input
            aria-label="Search products"
            placeholder="What are you looking for?"
            className="w-32 rounded-md bg-gray-100 px-3 py-2 text-xs sm:w-44 md:w-52 lg:w-64"
          />
          <Link href="#" aria-label="Wishlist">
            <BsBagHeart />
          </Link>
          <Link href="#" aria-label="Cart">
            <MdOutlineAddShoppingCart />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 border-t px-5 py-5 md:hidden">
          {routes.map((route) => (
            <li key={route.name}>
              <Link href={route.path} onClick={() => setMenuOpen(false)}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

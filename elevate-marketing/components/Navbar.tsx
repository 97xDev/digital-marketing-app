"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current path
  return (
    <nav className="border-b-2 border-teal-600 bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-gray-200 text-xl font-bold">
          Dark Elevate
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-2">
          <Link
            href="/about"
            className={`text-gray-200 text-lg font-semibold px-2 py-2 hover:underline decoration-2 underline-offset-4 ${
              pathname.startsWith("/about")
                ? "underline decoration-2 underline-offset-4"
                : "hover:text-gray-200"
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`text-gray-200 text-lg font-semibold px-2 py-2 hover:underline decoration-2 underline-offset-4 ${
              pathname === "/blog"
                ? "underline decoration-2 underline-offset-4"
                : "hover:text-gray-200"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-gray-200 text-lg font-semibold px-2 py-2 hover:underline decoration-2 underline-offset-4 ${
              pathname === "/contact"
                ? "underline decoration-2 underline-offset-4"
                : "hover:text-gray-200"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

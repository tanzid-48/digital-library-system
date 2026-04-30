"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

//   letter work on that
  const user = null; 
  

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/allbooks" },
    { name: "My Profile", path: "/myprofile" },
  ];

  const linkStyle = (path) =>
    pathname === path
      ? "text-black font-semibold border-b-2 border-black pb-2 text-purple-500"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
        <div>
          <Link href="/" className="  flex items-center gap-2 text-xl font-bold text-blue-600">
        <FaBookOpen /> BookIfy
          </Link>
        </div>

        <ul className="flex justify-center gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={linkStyle(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>


        <div className="flex justify-end items-center gap-4">
          {user ? (
            <>
              <span className="font-medium">{user.name}</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 bg-purple-600   text-white rounded-md hover:bg-sky-600"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
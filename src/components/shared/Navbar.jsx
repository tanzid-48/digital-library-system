"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const defaultAvatar = "https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/allbooks" },
    { name: "My Profile", path: "/myprofile" },
  ];

  const linkStyle = (path) =>
    pathname === path
      ? "text-purple-500 font-semibold border-b-2 border-purple-500 pb-2"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
        <div>
          <Link
            href="/"
            className="  flex items-center gap-2 text-xl font-bold text-blue-600"
          >
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
          {isPending ? (
            <span className="loading loading-spinner loading-xl text-success"></span>
          ) : user ? (
            <>
              <Image
                src={user.image || defaultAvatar}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full "
              />
              <span className="font-medium">Hello, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
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

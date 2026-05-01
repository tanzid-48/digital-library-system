"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaBookOpen, FaTimes } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const defaultAvatar =
    "https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleLogout = async () => {
    await authClient.signOut();
     setMenuOpen(false);
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
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <FaBookOpen /> BookIfy
        </Link>
        <ul className="hidden md:flex justify-center gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={linkStyle(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-xl text-success"></span>
          ) : user ? (
            <>
              <Image
                src={user.image || defaultAvatar}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
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
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-sky-600"
            >
              Login
            </Link>
          )}
        </div>
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={linkStyle(link.path)}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <hr />
          {user ? (
            <div className="flex items-center gap-3">
              <Image
                src={user.image || defaultAvatar}
                alt="profile"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-medium">Hello, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="ml-auto px-3 py-1 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-sky-600 text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

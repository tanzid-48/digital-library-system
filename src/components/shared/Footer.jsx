import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
             📚 BookIfy
            </h2>
            <p className="text-zinc-400">
              Discover, explore and borrow your favorite books online.
              A modern digital library experience for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400 ">
              <li className="hover:text-white"><Link href="/">Home</Link></li>
              <li className="hover:text-white"><Link href="/allbooks">All Books</Link></li>
              <li className="hover:text-white"><Link href="/myprofile">My Profile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="hover:text-white">Story</li>
              <li className="hover:text-white">Tech</li>
              <li className="hover:text-white">Science</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <p className="text-zinc-400 hover:text-blue-400">mdtanzid.525@gmail.com</p>
            <p className="text-zinc-400 hover:text-purple-500"> phone: 01798546510</p>
          </div>

        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} tanzid mondol . All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
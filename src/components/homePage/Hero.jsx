import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-15">
      <div className="text-center py-24 bg-linear-to-r from-blue-100 via-white to-purple-100 rounded-2xl shadow-md">

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          📚 Find Your Next Read
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover thousands of books, explore new worlds, and build your
          reading habit with our online library. Start your journey today!
        </p>
        <Link
          href="/allbooks"
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Browse Now
        </Link>

      </div>
    </div>
  );
};

export default Hero;
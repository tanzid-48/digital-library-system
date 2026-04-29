import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-red-500 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;
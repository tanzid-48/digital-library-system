import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">

  
      <div className="h-10 bg-gray-200 rounded-md w-full mb-10"></div>

      <div className="flex flex-col md:grid md:grid-cols-12 gap-6">
        <div className="md:col-span-3 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
          ))}
        </div>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow space-y-3">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-8 bg-gray-300 rounded-md mt-2"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loading;
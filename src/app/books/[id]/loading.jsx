import React from "react";

const BookDetailsLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      
      <div className="flex items-center gap-4">
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>

      <p className="text-sm text-gray-400 animate-pulse">
        Loading details...
      </p>
    </div>
  );
};

export default BookDetailsLoading;
'use client'
import React, { useState } from "react";
import { toast } from "sonner";

const BorrowButton = ({ bookTitle }) => {

  const [isBorrowed, setIsBorrowed] = useState(false);

  const handleBorrow = () => {
  setIsBorrowed(true);

  toast.success(`Success! You have borrowed "${bookTitle}"`);
  };
  return (
   
      <button
        onClick={handleBorrow}
        disabled={isBorrowed}
        className={`btn rounded-2xl px-10 border-none shadow-lg transition-transform ${
          isBorrowed
            ? ("bg-gray-400 cursor-not-allowed text-white"
            ):( "bg-purple-600 hover:bg-purple-700 text-white active:scale-95")
        }`}
      >
        {isBorrowed ? "Already Borrowed" : "Borrow This Book"}
      </button>

  );
};

export default BorrowButton;

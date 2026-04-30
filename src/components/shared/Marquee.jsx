"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const books = [
  { id: 1, title: "The Quantum Leap" },
  { id: 2, title: "Mastering Next.js" },
  { id: 3, title: "Echoes of the Forest" },
  { id: 4, title: "Clean Code Architecture" },
  { id: 5, title: "Genetic Frontiers" },
  { id: 6, title: "The Last Kingdom" },
  { id: 7, title: "AI: The Next Era" },
  { id: 8, title: "Cosmic Voyager" },
  { id: 9, title: "Silent Witness" },
  { id: 10, title: "The CSS Handbook" },
  { id: 11, title: "Climate Solutions" },
  { id: 12, title: "Whispers of Winter" }
];

const ReactMarquee = () => {
  return (
  <div className="">
      <div className="flex items-center gap-4 bg-gray-100 py-3 px-4 rounded-lg shadow-sm">

      <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold whitespace-nowrap">
         New Arrivals
      </button>
      <Marquee pauseOnHover speed={60} gradient={false}>
          <span className="text-purple-600 font-semibold mx-4">
            🔥Popular Now: AI: The Next Era | 
          </span>
        <div className="flex gap-10">
          {books.map((b) => (
            <span key={b.id} className="font-medium text-gray-700 mx-3">
              📚 {b.title}
            </span>
          ))}
          <span className="text-blue-600 font-semibold mx-4">
            🔥 Special Discount on Memberships 
          </span>
        
        </div>
      </Marquee>

    </div>
  </div>
  );
};

export default ReactMarquee;
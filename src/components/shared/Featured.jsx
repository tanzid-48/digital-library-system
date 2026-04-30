import React from "react";
import BookCard from "./BookCard";
import Link from "next/link";
import { GetAllBooks } from "@/lib/data";

const Featured = async () => {
  const books = await GetAllBooks();

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl  font-bold text-center mb-10">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/allbooks">
            <button className="px-6 py-2 border bg-purple-600 text-white rounded-lg  ">
              View All Books
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Featured;

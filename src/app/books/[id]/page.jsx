import { GetSingleBook } from "@/lib/data";
import Image from "next/image";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const book = await GetSingleBook(id);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <Image
            src={book.image_url}
            alt={book.title}
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold hover:text-purple-400">Author:</span>{" "}
            {book.author}
          </p>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
          <div className="text-xl font-semibold text-green-600">
            {book.available_quantity} copies left
          </div>
          <div className="flex items-center gap-4 mt-6">
            <span className="px-4 py-2 text-xl font-medium bg-purple-100 text-purple-600 rounded-full">
              {book.category}
            </span>

            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-2xl px-6">
              Borrow Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;

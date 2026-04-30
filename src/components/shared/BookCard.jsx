import Image from "next/image";
import React from "react";
import Link from "next/link";

const BookCard = ({ book }) => {
  const { id, title, image_url, category, description } = book;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md  flex flex-col">
      <div className="overflow-hidden">
        <Image
          src={image_url}
          alt={title}
          width={800}
          height={500}
          className="h-55 w-full object-cover "
        />
        {/* <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span> */}
      </div>

      <div className="p-4 flex flex-col grow">
        <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
          {title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>
        <div className="mt-auto">
          <Link href={`/books/${id}`}>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const LeftSideBarCategory = ({ categories }) => {

  const searchParams = useSearchParams();
  
   const activeCategory = searchParams.get("category");


  const allCategories = [
    { id: "all", name: "All Books" },
    ...categories.map((cat) => ({ id: cat.toLowerCase(), name: cat })),
  ];

  return (
     <div className="text-center my-20 bg-gray-100 p-5 rounded-2xl">
      <h2 className="font-bold text-xl mb-4">All Categories</h2>

      <ul className="flex flex-col gap-3 mt-4">
        {allCategories.map((category) => {
          const isActive =
            category.id === "all"
              ? !activeCategory
              : activeCategory === category.id;

          return (
            <li
              key={category.id}
              className={`rounded-lg text-center font-medium transition ${
                isActive ? "bg-purple-600 text-white" : "hover:bg-gray-200"
              }`}
            >
              <Link
                href={
                  category.id === "all"
                    ? "/allbooks"
                    : `/allbooks?category=${category.id}`
                }
                className="block px-4 py-2"
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBarCategory;
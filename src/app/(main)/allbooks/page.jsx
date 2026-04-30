import LeftSideBarCategory from "@/components/homePage/LeftSideBarCategory";
import RightSideBar from "@/components/homePage/RightSideBar";
import SearchBar from "@/components/homePage/SearchBar";
import { GetAllBooks } from "@/lib/data";
import { Suspense } from "react";

const AllBooksPage = async ({ searchParams }) => {
  const books = await GetAllBooks();

   const uniqueCategories = [...new Set(books.map((b) => b.category))];
  // console.log(uniqueCategories,"hlo");
  const resolvedParams = await searchParams;
const selectedCategory = resolvedParams?.category;
const searchQuery = resolvedParams?.search;          
  let filteredBooks = books;

  if (selectedCategory) {
    filteredBooks = filteredBooks.filter(
      (b) => b.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }

  if (searchQuery) {
    filteredBooks = filteredBooks.filter((b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }
 

  return (
    <>
     <div className="container mx-auto px-4 pt-10">
  <Suspense fallback={<div>Loading...</div>}>
    <SearchBar />
  </Suspense>
</div>

      <div className="container mx-auto grid grid-cols-12 gap-10">
        <div className=" col-span-3">
          <LeftSideBarCategory
            categories={uniqueCategories}
          ></LeftSideBarCategory>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <RightSideBar key={book.id} book={book} />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No books found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooksPage;

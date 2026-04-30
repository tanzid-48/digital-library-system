import LeftSideBarCategory from "@/components/homePage/LeftSideBarCategory";
import RightSideBar from "@/components/homePage/RightSideBar";
import { GetAllBooks } from "@/lib/data";

const AllBooksPage = async ({ searchParams }) => {
  const books = await GetAllBooks();

  const uniqueCategories = [...new Set(books.map((b) => b.category))];
  // console.log(uniqueCategories,"hlo");

  const selectedCategory = (await searchParams).category;
  
  const filteredBooks = selectedCategory
    ? books.filter(
        (b) => b.category.toLowerCase() === selectedCategory.toLowerCase(),
      )
    : books;

  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-10">
        <div className=" col-span-3">
          <LeftSideBarCategory
            categories={uniqueCategories}
          ></LeftSideBarCategory>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">

            {filteredBooks.map((book) => (
              <RightSideBar key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooksPage;

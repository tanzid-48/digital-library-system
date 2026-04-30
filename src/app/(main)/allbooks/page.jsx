// 'use client'
import RightSideBar from '@/components/homePage/RightSideBar';
import { GetAllBooks } from '@/lib/data';


const AllBooksPage = async() =>{
    const books = await GetAllBooks();
    
    return (
        <>
        <div className='container mx-auto grid grid-cols-12 justify-between items-center'>
          <div className="bg-red-500 col-span-3">
            hello
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {
                books.map(book => <RightSideBar key={book.id} book= {book}></RightSideBar>)
            }
            </div>
          </div>
        </div>
        </>
    );
};

export default AllBooksPage;
import Hero from "@/components/homePage/Hero";
import ReactMarquee from "@/components/shared/Marquee";
import { GetAllBooks } from "@/lib/data";


export default async function Home() {
  const books = await GetAllBooks();
  return (
  <>
    <Hero></Hero>
    <ReactMarquee></ReactMarquee>
     <h2>Books: {books.length}</h2>

  </>
  );
}

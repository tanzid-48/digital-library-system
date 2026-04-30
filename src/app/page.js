import Hero from "@/components/homePage/Hero";
import ContactSection from "@/components/shared/ContactSection";
import Featured from "@/components/shared/Featured";
import ReactMarquee from "@/components/shared/Marquee";
import TrendingSection from "@/components/shared/TrendingSection";
import { GetAllBooks } from "@/lib/data";



export default async function Home() {
  const books = await GetAllBooks();
  return (
    <>
      <Hero></Hero>
      <ReactMarquee></ReactMarquee>
      <Featured books={books}></Featured>
      <TrendingSection books={books}></TrendingSection>
      <ContactSection></ContactSection>
    </>
  );
}

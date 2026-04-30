import Hero from "@/components/homePage/Hero";
import Featured from "@/components/shared/Featured";
import ReactMarquee from "@/components/shared/Marquee";



export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ReactMarquee></ReactMarquee>
      <Featured></Featured>
    </>
  );
}

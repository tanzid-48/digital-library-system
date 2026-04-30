"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { IoTrendingUp } from "react-icons/io5";

const TrendingSection = ({ books }) => {
  const trendingBooks = books.filter((book) => book.available_quantity <= 3);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="flex items-center justify-center gap-2 text-4xl font-bold text-center mb-10">
     Trending This Week <IoTrendingUp className="text-green-500 font-bold text-5xl " />
      </h2>

      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 2000,disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {trendingBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src={book.image_url}
                alt={book.title}
                width={800}
                height={500}
                className="h-[360px]w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                Trending
              </span>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{book.title}</h3>

                <p className="text-sm line-clamp-2 text-gray-200 mb-3">
                  {book.description}
                </p>

                <Link href={`/books/${book.id}`}>
                  <button className="bg-green-500 px-4 py-2 rounded-md text-sm hover:bg-green-600 transition">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingSection;

"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }
    router.push(`/allbooks?${params.toString()}`);
    setSearch(""); 
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form onSubmit={handleSearch} className="flex gap-2 w-9/12 mx-auto mb-8">
        <input
          type="text"
          placeholder="Search books with Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered input-sm w-full text-sm"
        />
        <button
          type="submit"
          className="btn btn-sm bg-green-600 rounded-2xl text-white p-2 px-6"
        >
          Search
        </button>
      </form>
    </Suspense>
  );
};

export default SearchBar;
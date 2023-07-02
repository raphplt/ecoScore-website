import React, { useState, useContext, useEffect } from "react";
import { api } from "../services/index";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/dist/client/router";
import { searchBar } from "@/services/products/products.services";
import Link from "next/link";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggest, setSuggest] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await searchBar(query);
    localStorage.setItem("searchResults", JSON.stringify(response));
    if (router.pathname === "/") {
      router.push("/resultats");
    } else router.reload();
  };

  const handleChange = async (e: any) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSuggest([]);
    } else if (e.target.value.length > 1) {
      const result: any = await searchBar(e.target.value);
      setSuggest(result);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-b-2 border-secondary-color hover:border-[#579452] py-2 w-[80%] sm:w-[70%] h-10 mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e)}
          placeholder="Rechercher... "
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          required
        />
        <button
          className="flex-shrink-0 bg-secondary-color hover:bg-[#579452] text-sm text-white py-2 px-2 rounded-xl mb-2"
          type="submit"
        >
          <MagnifyingGlassIcon className="sm:h-6 sm:w-6 h-4 w-4" />
        </button>
      </form>
      <div className="absolute flex flex-col pl-6 left-0 right-0 mx-auto bg-slate-400 bg-opacity-40 text-left w-[28%] px-48 rounded-lg">
        {suggest &&
          suggest.slice(0, 3).map((suggestion: any) => (
            <div key={suggestion.id} className="py-1">
              <Link href={"./resultats"}>{suggestion.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
import { api } from "../services/index";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/dist/client/router";
import { searchBar } from "@/services/products/products.service";
import Link from "next/link";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggest, setSuggest] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await searchBar(query);
    if (router.pathname === "/comparatif") {
      localStorage.setItem("compare", JSON.stringify(response));
      router.reload();
    } else {
      localStorage.setItem("searchResults", JSON.stringify(response));
      if (router.pathname === "/") {
        router.push("/resultats");
      } else router.reload();
    }
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

  const handleSetData = (data: any) => {
    localStorage.setItem("compare", JSON.stringify(data));
    router.reload();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-2 rounded-3xl py-5 border-secondary-color hover:border-[#579452] w-[80%] sm:w-[70%] h-10 mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e)}
          placeholder="Rechercher... "
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none pl-4"
          required
        />
        {query.length > 0 && (
          <button className="">
            <XMarkIcon className="sm:h-6 sm:w-6 h-4 w-4" />
          </button>
        )}
        <button
          className="flex-shrink-0 bg-secondary-color hover:bg-[#579452] text-sm text-white py-2 px-2 rounded-3xl "
          type="submit"
        >
          <MagnifyingGlassIcon className="sm:h-6 sm:w-6 h-4 w-4" />
        </button>
      </form>
      <div className=" flex flex-col mt-6 mx-auto bg-opacity-40 text-left ml-6 px-48 rounded-b-md">
        {suggest &&
          suggest.slice(0, 3).map((suggestion: any) => (
            <div key={suggestion.id} className="py-1">
              <button onClick={() => handleSetData(suggestion)}>
                <strong>{suggestion.title.slice(0, query.length)}</strong>
                {suggestion.title.slice(query.length)}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

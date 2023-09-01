import React, { useState, useContext } from "react";
import { api } from "../services/index";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/dist/client/router";

export default function SearchBarHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const path = router.pathname;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await api.get(`/products/search?query=${query}`);
    if (path === "/comparatif") {
      const data = localStorage.getItem("compare");
      if (data) localStorage.setItem("compare2", JSON.stringify(response.data));
      else localStorage.setItem("compare", JSON.stringify(response.data));
    }

    localStorage.setItem("searchResults", JSON.stringify(response.data));

    if (router.pathname === "/") {
      router.push("/resultats");
    } else {
        router.reload();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-b-2 border-secondary-color hover:border-[#579452] py-2 w-[70%] sm:w-[100%] h-8 mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher... "
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          required
        />
        <button
          className="flex-shrink-0 bg-secondary-color hover:bg-[#579452] text-sm text-white py-2 px-2 rounded-xl mb-2"
          type="submit"
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

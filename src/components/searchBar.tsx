import React, { useState, useContext } from "react";
import { api } from "../services/index";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import SearchContext from "../context/SearchContext";
// import { ProductContext } from "@/context/ProductContext";
import { useRouter } from "next/dist/client/router";

export default function SearchBar() {
  // const { setResults } = useContext(ProductContext);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Envoie une requête GET à l'API avec les critères de recherche
    const response = await api.get(`/products/search?query=${query}`);
    // Met à jour les résultats de la recherche dans le contexte
    // setResults(response.data);
    localStorage.setItem("searchResults", JSON.stringify(response.data));
    if (router.pathname === "/") {
      router.push("/resultats");
    } else router.reload();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border-b-2 border-[#CCDDCD] hover:border-[#95D5B2] py-2 w-[70%] sm:w-[70%] h-10 mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher... "
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-[#CCDDCD]"
          required
        />
        <button
          className="flex-shrink-0 bg-[#E2F1E3] hover:bg-[#95D5B2] text-sm text-white py-2 px-2 rounded-xl"
          type="submit"
        >
          <MagnifyingGlassIcon className="h-4 w-4 text-[#2D6A4F]" />
        </button>
      </form>
    </div>
  );
}

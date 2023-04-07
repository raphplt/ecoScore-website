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
        className="flex items-center border-b-2 border-secondary-color hover:border-green-600 py-2 w-[30%] h-10 mx-auto"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher... "
          className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
          required
        />
        <button
          className="flex-shrink-0 bg-secondary-color hover:bg-green-700 border-secondary-color hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded-xl"
          type="submit"
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { fetchProducts } from "@/services/products/products.services";

export default function SearchBar(props: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      setData(products);
    }
    fetchData();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Recherchez ici avec la chaîne de recherche "searchQuery"
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-b-2 border-green-500 hover:border-green-600 py-2 w-[30%] h-10 mx-auto"
    >
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Rechercher un produit..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button
        className="flex-shrink-0 bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="submit"
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>
    </form>
  );
}

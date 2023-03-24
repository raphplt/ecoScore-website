import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { fetchProducts } from "@/services/products/products.services";

export default function SearchBarOld(props: any) {
  const [searchQuery, setSearchQuery] = useState("");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const products = await fetchProducts();
  //     setData(products);
  //   }
  //   fetchData();
  // }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-b-2 border-secondary-color hover:border-green-600 py-2 w-[30%] h-10 mx-auto"
    >
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Rechercher un produit..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
}

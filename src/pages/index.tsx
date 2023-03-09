import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import SearchBar from "@/components/searchBar";
import { fetchProducts } from "@/services/products/products.services";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      setData(products);
    }
    fetchData();
  }, []);
  return (
    <div>
      <MetaData />
      <Header />
      <h1 className="text-[64px] mt-20 font-bold text-center mb-12">
        Eco score
      </h1>
      <SearchBar />
      {data.map((product: any) => (
        <ProductCard title={product.title} key={product.id} />
      ))}
    </div>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import SearchBar from "@/components/searchBar";
import ShortCutButton from "@/components/shortcutButton";
import { fetchProducts } from "@/services/products/products.services";
import Image from "next/image";
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
      <h1 className="text-[64px] text-green-600 mt-20 font-bold text-center mb-12 ">
        Eco score
      </h1>
      <SearchBar />
      <div className="w-[30%] mx-auto flex gap-5 justify-center flex-wrap mt-10">
        <ShortCutButton
          src={require("../../public/assets/icons/icon-clothes.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-food.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-IT.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-makeup.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-clothes.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-food.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-IT.png")}
          alt="icon"
        />
        <ShortCutButton
          src={require("../../public/assets/icons/icon-makeup.png")}
          alt="icon"
        />
      </div>
      <Footer />
      {/* {data.map((product: any) => (
        <ProductCard title={product.title} key={product.id} />
      ))} */}
    </div>
  );
}

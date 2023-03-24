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
const [bgColor, setBgColor] = useState(`var(--primary-color)`);

const changeColor = () => {
  if (bgColor === "var(--primary-color-dark)") {
    setBgColor("var(--primary-color)");
  } else {
    setBgColor("var(--primary-color-dark)");
  }
};
useEffect(() => {
  const fetchData = async () => {
    const result = await fetchProducts();
    setData(result);
  };
  fetchData();
}, []);
return (
  <div style={{ background: bgColor }}>
    <MetaData />
    <Header />
    <h1 className="text-[64px] text-secondary-color mt-20 font-bold text-center mb-12 ">
      Eco score
    </h1>
    <SearchBar />
    <div className="w-[30%] mx-auto flex gap-5 justify-center flex-wrap mt-10 mb-[300px]">
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
    <div className="grid grid-cols-2 grid-rows-3 w-full">
      <div className=" h-96">
        <h3 className="text-center text-2xl">Lorem Ipsum</h3>
      </div>
      <div className=" h-96">
        <div className="rounded-[50%] w-48 h-48 bg-green-200 mx-auto"></div>
      </div>
      <div className=" h-96">
        <div className="rounded-[50%] w-48 h-48 bg-green-200 mx-auto"></div>
      </div>
      <div className="h-96">
        <h3 className="text-center text-2xl">Lorem Ipsum</h3>
      </div>
      <div className=" h-96">
        <h3 className="text-center text-2xl">Lorem Ipsum</h3>
      </div>
      <div className="h-96"></div>
    </div>
    <button
      onClick={() => changeColor()}
      className=" bg-slate-500 border-2 px-2 py-2 "
    >
      <p>Dark mode</p>
    </button>

    {data.map((product: any) => (
        <ProductCard title={product.title} key={product.id} />
      ))}

    <Footer />
  </div>
);
}

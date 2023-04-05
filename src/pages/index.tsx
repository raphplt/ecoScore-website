import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ShortCutButton from "@/components/shortcutButton";
import { fetchProducts } from "@/services/products/products.services";

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
      <h1 className="text-[84px] text-secondary-color mt-20 font-bold text-center mb-12 font-libre ">
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
      <div className="grid grid-cols-2 grid-rows-3 w-full gap-y-48 mb-24">
        <div className="mx-auto w-2/3">
          <h2 className="text-center text-xl">Lorem Ipsum</h2>
          <div className=" text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <Image
          src={require("../../public/assets/index/indexImage1.png")}
          alt="Photo d'illustration"
          className="mx-auto"
        />
        <Image
          src={require("../../public/assets/index/indexImage2.png")}
          alt="Photo d'illustration"
          className="mx-auto"
        />
        <div className="mx-auto w-2/3">
          <h2 className="text-center text-xl">Lorem Ipsum</h2>
          <div className=" text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="mx-auto w-2/3">
          <h2 className="text-center text-xl">Lorem Ipsum</h2>
          <div className=" text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <Image
          src={require("../../public/assets/index/indexImage1.png")}
          alt="Photo d'illustration"
          className="mx-auto"
        />
      </div>
      <button
        onClick={() => changeColor()}
        className=" bg-slate-500 border-2 px-2 py-2 "
      >
        <p>Dark mode</p>
      </button>
      {/* {data.map((product: any) => (
        <ProductCard title={product.title} key={product.id} />
      ))} */}

      <Footer />
    </div>
  );
}

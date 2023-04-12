import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import ShortCutButton from "@/components/shortcutButton";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/services/categories/categories.services";

interface Category {
  _id: string;
  cat: string;
  subCat: Array<string>;
  image: string;
}

export default function Index() {
  const [data, setData] = useState<Category[]>([]);
  const [bgColor, setBgColor] = useState("var(--primary-color)");
  const [bgImg, setBgImg] = useState("");

  const bgTab = [
    "/assets/bg/bg-1.jpg",
    "/assets/bg/bg-2.jpg",
    "/assets/bg/bg-3.jpg",
    "/assets/bg/bg-4.jpg",
    "/assets/bg/bg-5.jpg",
    "/assets/bg/bg-6.jpg",
    "/assets/bg/bg-7.jpg",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgTab.length);
    setBgImg(bgTab[randomIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeColor = () => {
    if (bgColor === "var(--primary-color-dark)") {
      setBgColor("var(--primary-color)");
    } else {
      setBgColor("var(--primary-color-dark)");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCategories();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "0%",
      }}
    >
      <MetaData />
      <Header />
      <h1 className="lg:text-[84px] sm:text-[54px] text-secondary-color mt-20 font-bold text-center mb-12 font-libre">
        Eco score
      </h1>
      <SearchBar />

      <div className="lg:w-[30%] sm:w-[70%] mx-auto flex gap-5 justify-center flex-wrap mt-10 mb-[150px]">
        {data &&
          data.map((result) => (
            <ShortCutButton
              key={result._id}
              src={result.image}
              title={result.cat}
              alt="icon"
            />
          ))}
      </div>
      <div className="">
        <h2 className="mb-16 backdrop-blur-sm bg-white/30 py-5 px-16 rounded-xl text-2xl w-fit mx-auto">
          En utilisant EcoScore, vous participez à un monde plus vert:
        </h2>
        <div className="flex justify-center gap-32 mt-24">
          <div className="backdrop-blur-sm bg-white/30 py-5 px-8 rounded-3xl text-4xl">
            7418 Co²
          </div>
          <div className="backdrop-blur-sm bg-white/30 py-5 px-8 rounded-3xl text-4xl">
            34k
          </div>
          <div className="backdrop-blur-sm bg-white/30 py-5 px-8 rounded-3xl text-4xl">
            60 000
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 w-full gap-y-48 mb-24 mt-96">
        <div className="mx-auto w-2/3">
          <div className=" text-left mt-5 backdrop-blur-sm bg-white/30 py-5 px-8 rounded-xl">
            <h2 className="text-xl">Lorem Ipsum</h2>
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
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
        />
        <Image
          src={require("../../public/assets/index/indexImage2.png")}
          alt="Photo d'illustration"
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
        />
        <div className="mx-auto w-2/3">
          <div className=" text-left mt-5 backdrop-blur-sm bg-white/30 py-5 px-8 rounded-xl">
            <h2 className="text-xl">Lorem Ipsum</h2>
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
          <div className="text-left mt-5 backdrop-blur-sm bg-white/30 py-5 px-8 rounded-xl">
            <h2 className="text-xl">Lorem Ipsum</h2>
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
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
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

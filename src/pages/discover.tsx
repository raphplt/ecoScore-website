import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { useEffect, useState } from "react";
import { Product } from "./resultats";
import ProductCardSquare from "@/components/productCardSquare";
import { fetchProducts } from "@/services/products/products.service";
import HeaderMobile from "@/components/headerMobile";
import { fetchCategories } from "@/services/categories/categories.service";
import ProductCardTiny from "@/components/productCardTiny";

export default function Discover() {
  const [lengthResultats, setLengthResultats] = useState(10);
  const [data, setData] = useState<Product[]>([]);
  const [categories, setCategories] = useState([]);
  const [userID, setUserID] = useState(0);

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    if (user) {
      setUserID(JSON.parse(user).id);
    }
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchProducts();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchCategories();
      setCategories(result);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Header />
      <HeaderMobile />
      <MetaData />

      <div className="mt-5 sm:w-2/3 mx-auto">
        <h1 className="text-center text-3xl mb-12 mt-8 text-slate-800">
          Découvertes
        </h1>
        <h2 className="text-xl rounded-lg w-fit">Tendances</h2>
        <div className=" mx-auto bg-gradient-to-r from-[#b8dbb5] to-[#85ac83] py-4 px-10 rounded-lg my-10 mt-3">
          <div className="flex items-start gap-4 mt-4 overflow-scroll overflow-y-hidden pb-4 relative">
            {data &&
              data.map((result) => (
                <ProductCardSquare
                  key={result._id}
                  title={result.title}
                  type={result.type}
                  scoreEnergy={result.scoreEnergy}
                  scoreCarbon={result.scoreCarbon}
                  scoreRepair={result.scoreRepair}
                  trendScore={result.trendScore}
                  id={result._id}
                  idUser={userID}
                />
              ))}
            {/* <div className="absolute top-0 right-0 bottom-0 w-1/5 bg-gradient-to-l from-white to-transparent"></div> */}
          </div>
        </div>
        <div className=" mx-auto">
          {categories &&
            categories.map((category: any) => (
              <div key={category.category}>
                <h2 className="text-xl rounded-lg w-fit">
                  {category.category}
                </h2>
                <div className="mx-auto bg-gradient-to-r from-[#b8dbb5] to-[#85ac83] py-4 px-10 rounded-lg my-10 mt-3">
                  <div className="flex items-start gap-4 mt-4 overflow-scroll overflow-y-hidden pb-4 relative">
                    {data &&
                      data
                        .filter((result) => result.type === category.slug)
                        .map((result) => (
                          <ProductCardTiny
                            key={result._id}
                            title={result.title}
                            type={result.type}
                            scoreEnergy={result.scoreEnergy}
                            scoreCarbon={result.scoreCarbon}
                            scoreRepair={result.scoreRepair}
                            trendScore={result.trendScore}
                            id={result._id}
                            idUser={userID}
                          />
                        ))}
                    {/* <div className="absolute top-0 right-0 bottom-0 w-1/5 bg-gradient-to-l from-white to-transparent"></div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

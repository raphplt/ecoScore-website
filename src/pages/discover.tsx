import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { useEffect, useState } from "react";
import { Product } from "./resultats";
import ProductCardSquare from "@/components/productCardSquare";
import { fetchProducts } from "@/services/products/products.services";
import HeaderMobile from "@/components/headerMobile";
import { fetchCategories } from "@/services/categories/categories.services";

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
    <div className="bg-[#E7F1E6]">
      <Header />
      <HeaderMobile />
      <MetaData />

      <div className="mt-5">
        <h1 className="text-center text-3xl mb-12">Découvertes</h1>
        <div className="w-11/12 sm:w-2/3 mx-auto">
          {categories &&
            categories.map((category: any) => (
              <div key={category.category}>
                <div className="w-11/12 mx-auto bg-[#a6c5a3] py-4 px-10 rounded-xl my-10">
                  <h2 className="text-lg px-8 bg-slate-100 rounded-2xl w-fit ">
                    {category.category}
                  </h2>
                  <div className="flex items-start gap-4 mt-4 overflow-scroll overflow-y-hidden pb-4 relative">
                    {data &&
                      data
                        .filter((result) => result.type === category.slug)
                        .map((result) => (
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
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

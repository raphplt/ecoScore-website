import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import Score from "@/components/scores";
import SearchBar from "@/components/searchBar";
import SearchBarHeader from "@/components/searchBarHeader";
import { fetchProduct } from "@/services/products/products.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Comparatif() {
  const [idCompare1, setIdCompare1] = useState("");
  const [datas1, setDatas1]: any = useState([]);
  const [datas2, setDatas2]: any = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    const item: any = localStorage.getItem("compare");
    setDatas1(JSON.parse(item));
    // if (item) {
    //   const fetchDatas = async () => {
    //     const result = await fetchProduct(item);
    //     setDatas1(result);
    //     setScore1(result.scoreEnergy + result.scoreCarbon + result.scoreRepair);
    //   };
    //   fetchDatas();
    // }
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("compare2");
    if (item) {
      setDatas2(JSON.parse(item));
      setScore2(
        JSON.parse(item)[0].scoreEnergy +
          JSON.parse(item)[0].scoreCarbon +
          JSON.parse(item)[0].scoreRepair
      );
    }
  }, []);

  const clearDatas2 = () => {
    localStorage.removeItem("compare2");
    setDatas2([]);
  };

  const clearDatas1 = () => {
    localStorage.removeItem("compare");
    setDatas1([]);
  };

  return (
    <div className="bg-[#E7F1E6]">
      <Header />
      <MetaData />
      <div className="w-1/2 h-[70vh] py-8 mx-auto shadow-md bg-slate-100 mt-24 mb-64 rounded-xl">
        <h1 className="text-center mb-10 text-4xl font-libre">Comparatif</h1>
        <div className="mb-24 mt-12">{!datas1 ? <SearchBar /> : <></>}</div>
        <div className="flex mx-auto w-11/12">
          <div className="w-1/3 flex justify-aroundf mx-auto flex-col mb-96">
            {datas1 && datas1.length === 0 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarHeader />
              </div>
            ) : (
              <div className="text-center mb-8">
                <h2 className="text-lg">
                  {datas1 && datas1.length > 0 && datas1[0].title}
                </h2>
              </div>
            )}
            {datas1 && datas1.length > 0 && (
              <div className="flex flex-col">
                <Score
                  scoreEnergy={datas1[0].scoreEnergy}
                  scoreCarbon={datas1[0].scoreCarbon}
                  scoreRepair={datas1[0].scoreRepair}
                />
              </div>
            )}
            {datas1 && datas1.length !== 0 && (
              <button
                onClick={clearDatas1}
                className="mt-12 bg-slate-300 rounded-2xl py-1 drop-shadow-sm px-10 w-fit mx-auto"
              >
                Modifier le produit
              </button>
            )}
          </div>
          <div className="w-1/3 flex justify-aroundf mx-auto flex-col mb-96">
            {datas2 && datas2.length === 0 && datas1 && datas1.length > 0 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarHeader />
              </div>
            ) : (
              <h2 className="text-lg text-center mb-8">
                {datas2 && datas2.length > 0 && datas2[0].title}
              </h2>
            )}
            <div className="flex flex-col">
              {datas2.length > 0 && (
                <Score
                  scoreEnergy={datas2[0].scoreEnergy}
                  scoreCarbon={datas2[0].scoreCarbon}
                  scoreRepair={datas2[0].scoreRepair}
                />
              )}
            </div>
            {datas2.length > 0 && (
              <button
                onClick={clearDatas2}
                className="mt-12 bg-slate-300 rounded-2xl py-1 drop-shadow-sm px-10 w-fit mx-auto"
              >
                Modifier le produit
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

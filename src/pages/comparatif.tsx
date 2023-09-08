import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Score from "@/components/scores";
import SearchBarComparatif from "@/components/searchBarComparatif";
import SearchBarHeader from "@/components/searchBarHeader";
import SearchBarTiny from "@/components/searchBarTiny";
import { useEffect, useState } from "react";

export default function Comparatif() {
  const [datas1, setDatas1]: any = useState([]);
  const [datas2, setDatas2]: any = useState([]);

  useEffect(() => {
    const item: any = localStorage.getItem("compare");
    setDatas1(JSON.parse(item));
  }, []);

  useEffect(() => {
    const item: any = localStorage.getItem("compare2");
    setDatas2(JSON.parse(item));
  }, []);

  const clearDatas1 = () => {
    localStorage.removeItem("compare");
    setDatas1([]);
  };

  const clearDatas2 = () => {
    localStorage.removeItem("compare2");
    setDatas2([]);
  };

  return (
    <div className="">
      <Header />
      <MetaData />
      <div className="w-1/2 h-[70vh] py-8 mx-auto shadow-md bg-slate-100 mt-24 mb-64 rounded-xl">
        <h1 className="text-center mb-10 text-4xl font-libre">Comparatif</h1>
        <div className="mb-24 mt-12">
          {!datas1 ? <SearchBarComparatif /> : <></>}
        </div>
        <div className="flex mx-auto w-11/12">
          <div className="w-1/3 flex justify-aroundf mx-auto flex-col">
            {datas1 && JSON.stringify(datas1).length === 0 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarTiny />
              </div>
            ) : (
              <div className="text-center mb-5">
                <h2 className="text-lg">{datas1 && datas1.title}</h2>
              </div>
            )}
            {/* {datas1 && JSON.stringify(datas1).length > 0 && ( */}
            <div className="flex flex-col">
              {/* <Score
                scoreEnergy={datas1.scoreEnergy}
                scoreCarbon={datas1.scoreCarbon}
                scoreRepair={datas1.scoreRepair}
              /> */}
            </div>
            {/* )} */}
            {datas1 && (
              <button
                onClick={clearDatas1}
                className="bg-slate-300 rounded-2xl py-1 drop-shadow-sm px-5 w-fit mx-auto"
              >
                Modifier le produit
              </button>
            )}
          </div>
          <div className="w-1/3 flex justify-aroundf mx-auto flex-col ">
            {!datas2 && datas1 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarTiny />
              </div>
            ) : (
              <h2 className="text-lg text-center mb-5">
                {datas2 && datas2.title}
              </h2>
            )}
            <div className="flex flex-col">
              {/* {datas2 && JSON.stringify(datas2).length > 0 && (
                <Score
                  scoreEnergy={datas2.scoreEnergy}
                  scoreCarbon={datas2.scoreCarbon}
                  scoreRepair={datas2.scoreRepair}
                />
              )} */}
            </div>
            {datas2 && (
              <button
                onClick={clearDatas2}
                className="bg-slate-300 rounded-2xl py-1 drop-shadow-sm px-5 w-fit mx-auto"
              >
                Modifier le produit
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-10 mt-12 flex-col">
          {datas1 && datas1.scoreEnergy && datas2 && datas2.scoreEnergy && (
            <div className="flex w-full mx-auto justify-around">
              <div>{datas1.scoreEnergy}</div>
              <div>{datas2.scoreEnergy}</div>
            </div>
          )}
          {datas1 && datas1.scoreRepair && datas2 && datas2.scoreRepair && (
            <div className="flex w-full mx-auto justify-around">
              <div>{datas1.scoreRepair}</div>
              <div>{datas2.scoreRepair}</div>
            </div>
          )}
          {datas1 && datas1.scoreCarbon && datas2 && datas2.scoreCarbon && (
            <div className="flex w-full mx-auto justify-around">
              <div>{datas1.scoreCarbon}</div>
              <div>{datas2.scoreCarbon}</div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

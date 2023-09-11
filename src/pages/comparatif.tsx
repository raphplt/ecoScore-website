import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Score from "@/components/scores";
import SearchBarComparatif from "@/components/searchBarComparatif";
import SearchBarHeader from "@/components/searchBarHeader";
import SearchBarTiny from "@/components/searchBarTiny";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Comparatif() {
  const [datas1, setDatas1]: any = useState([]);
  const [datas2, setDatas2]: any = useState([]);
  const router = useRouter();
  const [borderColor1, setBorderColor1] = useState("gray");
  const [borderColor2, setBorderColor2] = useState("gray");
  const [bgColor1, setBgColor1] = useState("gray");
  const [bgColor2, setBgColor2] = useState("gray");

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
    router.reload();
  };

  const clearDatas2 = () => {
    localStorage.removeItem("compare2");
    setDatas2([]);
    router.reload();
  };

  useEffect(() => {
    if (datas1 && datas2) {
      if (
        datas1.scoreEnergy + datas1.scoreCarbon + datas1.scoreRepair >
        datas2.scoreEnergy + datas2.scoreCarbon + datas2.scoreRepair
      ) {
        setBorderColor1("var(--scores-green)");
        setBorderColor2("var(--scores-red)");
        setBgColor1("var(--scores-green-secondary)");
        setBgColor2("var(--scores-red-secondary)");
      } else if (
        datas1.scoreEnergy + datas1.scoreCarbon + datas1.scoreRepair <
        datas2.scoreEnergy + datas2.scoreCarbon + datas2.scoreRepair
      ) {
        setBorderColor1("var(--scores-red)");
        setBorderColor2("var(--scores-green)");
        setBgColor1("var(--scores-red-secondary)");
        setBgColor2("var(--scores-green-secondary)");
      } else if (
        datas1.scoreEnergy + datas1.scoreCarbon + datas1.scoreRepair ===
        datas2.scoreEnergy + datas2.scoreCarbon + datas2.scoreRepair
      ) {
        setBorderColor1("scores-blue");
        setBorderColor2("scores-blue");
        setBgColor1("var(--scores-blue-secondary)");
        setBgColor2("var(--scores-blue-secondary)");
      }
    } else {
      setBorderColor1("gray");
      setBorderColor2("gray");
      setBgColor1("gray");
      setBgColor2("gray");
    }
  }, [datas1, datas2]);

  return (
    <div className="">
      <Header />
      <MetaData />
      <div
        className="w-1/2 h-[70vh] py-8 mx-auto shadow-md
       bg-gray-200 mt-24 mb-64 rounded-xl"
      >
        <h1 className="text-center mb-10 text-2xl ">
          {!datas1 && !datas2 ? (
            <div>Comparatif</div>
          ) : (
            <div className="flex">
              <strong className="w-1/3 text-right">
                {datas1 && datas1.title}
              </strong>

              <div className="w-1/3">&ensp; vs &ensp;</div>
              <strong className="w-1/3 text-left">
                {datas2 && datas2.title}
              </strong>
            </div>
          )}
        </h1>
        <div className="mb-24 mt-12">
          {!datas1 && !datas2 ? <SearchBarComparatif /> : <></>}
        </div>
        <div className="flex mx-auto w-11/12">
          <div className="w-2/5 flex justify-aroundf mx-auto flex-col">
            {!datas1 && datas2 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarTiny />
              </div>
            ) : (
              datas1 && (
                <div
                  className="text-center bg-slate-00 py-4 border-2 drop-shadow-md px-10 rounded-lg  mb-5"
                  style={{
                    borderColor: borderColor1,
                    backgroundColor: bgColor1,
                  }}
                >
                  <h2 className="text-lg mb-10">{datas1 && datas1.title}</h2>
                  <div className="flex flex-col">
                    <Score
                      scoreEnergy={datas1.scoreEnergy}
                      scoreCarbon={datas1.scoreCarbon}
                      scoreRepair={datas1.scoreRepair}
                    />
                  </div>
                  <button
                    onClick={clearDatas1}
                    className="bg-slate-300 mt-24 rounded-2xl py-1 drop-shadow-sm px-5 w-fit mx-auto"
                  >
                    Modifier le produit
                  </button>
                </div>
              )
            )}
          </div>
          <div className="w-2/5 flex justify-aroundf mx-auto flex-col ">
            {!datas2 && datas1 ? (
              <div>
                <div className="text-center text-lg mb-6">
                  Choisir un produit à comparer
                </div>
                <SearchBarTiny />
              </div>
            ) : (
              datas2 && (
                <div
                  className="text-center drop-shadow-md bg-slate-200 py-4 border-2 px-10 rounded-lg mb-5"
                  style={{
                    borderColor: borderColor2,
                    backgroundColor: bgColor2,
                  }}
                >
                  <h2 className="text-lg text-center mb-10">
                    {datas2 && datas2.title}
                  </h2>
                  <div className="flex flex-col">
                    <Score
                      scoreEnergy={datas2.scoreEnergy}
                      scoreCarbon={datas2.scoreCarbon}
                      scoreRepair={datas2.scoreRepair}
                    />
                  </div>
                  <button
                    onClick={clearDatas2}
                    className="bg-slate-300 mt-24 rounded-2xl py-1 drop-shadow-sm px-5 w-fit mx-auto"
                  >
                    Modifier le produit
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

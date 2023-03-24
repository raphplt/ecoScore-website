import Footer from "@/components/footer";
import Header from "@/components/header";
import Metadatas from "@/components/metadatas";
import { useContext, useEffect, useState } from "react";

export default function Product() {
  const [resultats, setResultats]: any = useState();
  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResultats(JSON.parse(storedResults));
    }
  }, []);
  console.log(resultats);
  return (
    <div className="">
      <Metadatas />
      <Header />
      <div className="w-[30%] h-[400px] bg-slate-300 mx-auto mb-64 mt-48 rounded-xl">
        {resultats ? (
          resultats.map((result: any) => (
            <div key={result._id} className="text-center mt-10">
              <div className="text-2xl mb-5">{result.title}</div>
              <div>Type : {result.type}</div>
              <div>
                Score énergétique:
                {result.scoreEnergy}
              </div>
              <div> Score carbone : {result.scoreCarbon}</div>
              <div>Score de réparabilité : {result.scoreRepair}</div>
            </div>
          ))
        ) : (
          <li>Aucun résultat</li>
        )}
      </div>
      <Footer />
    </div>
  );
}

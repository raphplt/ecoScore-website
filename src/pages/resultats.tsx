import Footer from "@/components/footer";
import Header from "@/components/header";
import Metadatas from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import ProductCardSquare from "@/components/productCardSquare";
import SearchBarResults from "@/components/searchBarResults";
import { useContext, useEffect, useState } from "react";

export interface Product {
  _id: string;
  title: string;
  type: string;
  tags: Array<string>;
  trendScore: number;
  scoreEnergy: number;
  scoreCarbon: number;
  scoreRepair: number;
}

export default function Resultats() {
  const [resultats, setResultats] = useState<Product[]>([]);
  const [lengthResultats, setLengthResultats] = useState(6);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResultats(JSON.parse(storedResults));
    }
  }, []);

  const updateLength = () => {
    setLengthResultats(lengthResultats + 10);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450) {
        setIsPhone(true);
      }
    });
  }, []);
  return (
    <div className="h-full">
      <Metadatas />
      <Header />
      <div className="mt-12">
        <SearchBarResults />
      </div>
      <div className="text-center mt-5 text-xl mb-28">
        {resultats.length} résultats
      </div>
      <div className="mb-48">
        {resultats.length > 0 ? (
          <div>
            {!isPhone ? (
              resultats
                .slice(0, lengthResultats)
                .map((result) => (
                  <ProductCard
                    key={result._id}
                    title={result.title}
                    type={result.type}
                    scoreEnergy={result.scoreEnergy}
                    scoreCarbon={result.scoreCarbon}
                    scoreRepair={result.scoreRepair}
                  />
                ))
            ) : (
              <div className="flex flex-col items-center">
                {resultats.slice(0, lengthResultats).map((result) => (
                  <ProductCardSquare
                    key={result._id}
                    title={result.title}
                    type={result.type}
                    scoreEnergy={result.scoreEnergy}
                    scoreCarbon={result.scoreCarbon}
                    scoreRepair={result.scoreRepair}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center mt-20">Aucun résultat</div>
        )}
      </div>

      <div id="buttonLength" className="flex justify-center items-center">
        <button
          className="px-5 py-2 rounded-xl bg-secondary-color text-white"
          onClick={() => {
            updateLength();
          }}
        >
          Voir plus
        </button>
      </div>
      <div className="mt-24 mb-24 text-center">Produits en vedette</div>
      <div className="mt-24 mb-24 text-center">Voir aussi</div>
      <Footer />
    </div>
  );
}

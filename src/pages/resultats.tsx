import Footer from "@/components/footer";
import Header from "@/components/header";
import Metadatas from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import SearchBar from "@/components/SearchBar";
import { useContext, useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  type: string;
  scoreEnergy: number;
  scoreCarbon: number;
  scoreRepair: number;
}

export default function Product() {
  const [resultats, setResultats] = useState<Product[]>([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResultats(JSON.parse(storedResults));
    }
  }, []);
  console.log(resultats);
  return (
    <div className="h-full">
      <Metadatas />
      <Header />
      <div className="mt-12">
        <SearchBar />
      </div>
      <div className="text-center mt-5 text-xl mb-28">
        {resultats.length} résultats
      </div>
      <div className="mb-48">
        {resultats.length > 0 ? (
          resultats.map((result) => (
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
          <div className="text-center mt-20">Aucun résultat</div>
        )}
      </div>
      <div className="mt-24 mb-24 text-center">Produits en vedette</div>
      <div className="mt-24 mb-24 text-center">Voir aussi</div>
      <Footer />
    </div>
  );
}

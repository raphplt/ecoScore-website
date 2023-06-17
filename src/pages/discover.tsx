import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { useEffect, useState } from "react";
import { Product } from "./resultats";
import ProductCardSquare from "@/components/productCardSquare";
import { fetchProducts } from "@/services/products/products.services";

export default function Discover() {
  const [lengthResultats, setLengthResultats] = useState(4);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchProducts();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="bg-[#E7F1E6]">
      <Header />
      <MetaData />

      <div className="mt-5">
        <h1 className="text-center text-3xl">Découvertes</h1>
        <div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-12 text-2xl text-secondary-color font-semibold">
              Produits tendances
            </h2>
            <div className="flex items-start  gap-12 mt-4">
              {data &&
                data
                  .slice(0, lengthResultats)
                  .map((result) => (
                    <ProductCardSquare
                      key={result._id}
                      title={result.title}
                      type={result.type}
                      scoreEnergy={result.scoreEnergy}
                      scoreCarbon={result.scoreCarbon}
                      scoreRepair={result.scoreRepair}
                      trendScore={result.trendScore}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-12 text-2xl text-secondary-color font-semibold">
              Produits tendances
            </h2>
            <div className="flex items-start  gap-12 mt-4">
              {data &&
                data
                  .slice(0, lengthResultats)
                  .map((result) => (
                    <ProductCardSquare
                      key={result._id}
                      title={result.title}
                      type={result.type}
                      scoreEnergy={result.scoreEnergy}
                      scoreCarbon={result.scoreCarbon}
                      scoreRepair={result.scoreRepair}
                      trendScore={result.trendScore}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-12 text-2xl text-secondary-color font-semibold">
              Produits tendances
            </h2>
            <div className="flex items-start  gap-12 mt-4">
              {data &&
                data
                  .slice(0, lengthResultats)
                  .map((result) => (
                    <ProductCardSquare
                      key={result._id}
                      title={result.title}
                      type={result.type}
                      scoreEnergy={result.scoreEnergy}
                      scoreCarbon={result.scoreCarbon}
                      scoreRepair={result.scoreRepair}
                      trendScore={result.trendScore}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-12 text-2xl text-secondary-color font-semibold">
              Produits tendances
            </h2>
            <div className="flex items-start  gap-12 mt-4">
              {data &&
                data
                  .slice(0, lengthResultats)
                  .map((result) => (
                    <ProductCardSquare
                      key={result._id}
                      title={result.title}
                      type={result.type}
                      scoreEnergy={result.scoreEnergy}
                      scoreCarbon={result.scoreCarbon}
                      scoreRepair={result.scoreRepair}
                      trendScore={result.trendScore}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

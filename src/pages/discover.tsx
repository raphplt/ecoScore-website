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
    <div>
      <Header />
      <MetaData />
      <div className="mt-5">
        <h1 className="text-center text-3xl">Découvertes</h1>
        <div>
          <h2 className="ml-24 mt-12 text-xl">Catégories tendances</h2>
          <div className="flex items-start w-10/12">
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
                  />
                ))}
          </div>

          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div className="flex items-start w-10/12">
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
                    />
                  ))}
            </div>
          </div>
          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div className="flex items-start w-10/12">
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
                    />
                  ))}
            </div>
          </div>
          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div className="flex items-start w-10/12">
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

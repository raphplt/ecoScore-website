import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { useEffect, useState } from "react";
import { Product } from "./resultats";
import ProductCardSquare from "@/components/productCardSquare";
import { fetchProducts } from "@/services/products/products.services";
import HeaderMobile from "@/components/headerMobile";

export default function Discover() {
  const [lengthResultats, setLengthResultats] = useState(10);
  const [data, setData] = useState<Product[]>([]);
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

  return (
    <div className="bg-[#E7F1E6]">
      <Header />
      <HeaderMobile />
      <MetaData />

      <div className="mt-5">
        <h1 className="text-center text-3xl">Découvertes</h1>
        <div className="w-11/12 sm:w-2/3 mx-auto">
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-16 text-2xl text-secondary-color font-semibold">
              Produits tendances
            </h2>
            <div className="flex items-start gap-12 mt-4 overflow-scroll overflow-y-hidden pb-4">
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
                      id={result._id}
                      idUser={userID}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className="mt-16 text-2xl text-secondary-color font-semibold">
              Ordinateurs
            </h2>
            <div className="flex items-start gap-12 mt-4 overflow-scroll overflow-y-hidden pb-4">
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
                      id={result._id}
                      idUser={userID}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-16 text-2xl text-secondary-color font-semibold">
              Téléphonie
            </h2>
            <div className="flex items-start  gap-12 mt-4 overflow-y-hidden overflow-clip pb-4">
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
                      id={result._id}
                      idUser={userID}
                    />
                  ))}
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <h2 className=" mt-16 text-2xl text-secondary-color font-semibold">
              Vêtements
            </h2>
            <div className="flex items-start overflow-scroll gap-12 mt-4 overflow-y-hidden pb-4">
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
                      id={result._id}
                      idUser={userID}
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

import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import ProductCard from "@/components/productCard";
import SearchBar from "@/components/searchBar";
import { fetchProduct } from "@/services/products/products.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Comparatif() {
  const [idCompare1, setIdCompare1] = useState("");
  const [datas1, setDatas1]: any = useState([]);
  useEffect(() => {
    const item = localStorage.getItem("compare");
    if (item) {
      const fetchDatas = async () => {
        console.log(idCompare1);
        const result = await fetchProduct(idCompare1);
        setDatas1(result);
      };
      setIdCompare1(JSON.parse(item));
      fetchDatas();
    }
  }, [idCompare1]);

  return (
    <div className="bg-[#E7F1E6]">
      <Header />
      <MetaData />
      <div className="w-1/2 h-[69vh] py-8 mx-auto shadow-md bg-slate-100 mt-24 mb-64 rounded-xl">
        <h1 className="text-center mb-10 text-4xl font-libre">Comparatif</h1>
        <div className="mb-24 mt-12">
          {JSON.stringify(datas1).length}
          <SearchBar />
        </div>
        <div className="flex justify-around mb-96">
          <div>Choisir un produit à comparer</div>
          {datas1.length > 0 &&
            datas1.map((data: any) => {
              <ProductCard
                key={data._id}
                title={data.title}
                type={data.type}
                scoreEnergy={data.scoreEnergy}
                scoreCarbon={data.scoreCarbon}
                scoreRepair={data.scoreRepair}
              />;
            })}
          {JSON.stringify(datas1)}
          <div>Choisir un produit à comparer</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

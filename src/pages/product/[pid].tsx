import Header from "@/components/header";
import HeaderMobile from "@/components/headerMobile";
import MetaData from "@/components/metadatas";
import ProductCardSquare from "@/components/productCardSquare";
import Score from "@/components/scores";
import {
  fetchProduct,
  fetchProducts,
} from "@/services/products/products.services";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData]: any = useState([]);
  const [datas, setDatas]: any = useState([]);
  const [id, setId] = useState(0);
  const router = useRouter();
  let { pid }: any = router.query;

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchProduct(pid);
      setData(result);
    };
    fetch();
  }, [pid]);

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await fetchProducts();
      setDatas(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#E7F1E6] h-[100vh]">
      <MetaData />
      <Header />
      <HeaderMobile />

      <div className="w-5/6 sm:w-3/4 flex mx-auto mt-6 sm:mt-24 gap-4 sm:gap-20 justify-evenly">
        <div className="bg-slate-500 rounded-xl sm:w-96 sm:h-96 w-24 h-24 mt-24 hidden sm:flex"></div>
        <div className="flex gap-5 flex-col rounded-lg py-10 px-2 sm:px-24">
          <div className="mb-6 flex flex-col gap-5 border-b-[1px] border-slate-300 pb-4">
            <div className="bg-slate-500 rounded-xl sm:w-96 sm:h-96 w-48 h-48 mx-auto sm:hidden"></div>

            <div className="text-2xl">{data.title}</div>
            <div>{data.type}</div>
          </div>
          <div className=" mb-12 sm:w-96 h-36 border-2 border-gray-500 rounded-lg pl-2  sm:flex flex-col">
            Description
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
          {data && (
            <Score
              scoreEnergy={data.scoreEnergy}
              scoreCarbon={data.scoreCarbon}
              scoreRepair={data.scoreRepair}
            />
          )}
          <button className="mx-auto sm:mx-0 w-1/2 mt-12 bg-secondary-color border-secondary-color hover:bg-[#1d643b] text-center border-2 px-2 py-1 sm:px-4 sm:py-2 rounded-2xl text-white ">
            <Link href={"../comparatif"}>Ajouter au comparateur</Link>
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto mt-24">
        <h2 className="text-2xl">Voir plus</h2>
        <div className="w-32 h-[1px] bg-slate-500"></div>
        <div className="flex items-start gap-12 mt-4 overflow-scroll overflow-y-hidden pb-4">
          {datas &&
            datas.map((result: any) => (
              <ProductCardSquare
                key={result._id}
                title={result.title}
                type={result.type}
                scoreEnergy={result.scoreEnergy}
                scoreCarbon={result.scoreCarbon}
                scoreRepair={result.scoreRepair}
                trendScore={result.trendScore}
                id={result._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

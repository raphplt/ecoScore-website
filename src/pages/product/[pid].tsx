import Header from "@/components/header";
import HeaderMobile from "@/components/headerMobile";
import MetaData from "@/components/metadatas";
import Score from "@/components/scores";
import { fetchProduct } from "@/services/products/products.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData]: any = useState([]);
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

  return (
    <div className="bg-[#E7F1E6] h-[100vh]">
      <MetaData />
      <Header />
      <HeaderMobile />

      <div className="w-3/4 flex mx-auto mt-24 gap-20 justify-evenly">
        <div className="bg-slate-500 rounded-xl w-96 h-96"></div>
        <div>
          <div className="mb-12 flex flex-col gap-5">
            <div>{data.title}</div>
            <div>{data.type}</div>
          </div>
          <Score
            scoreEnergy={data.scoreEnergy}
            scoreCarbon={data.scoreCarbon}
            scoreRepair={data.scoreRepair}
          />
        </div>
      </div>
    </div>
  );
}

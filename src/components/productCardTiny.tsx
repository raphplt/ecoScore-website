import { useEffect, useState } from "react";
import Image from "next/image";
import { addTrendProduct } from "@/services/users/users.services";
import { useRouter } from "next/router";

export default function ProductCardTiny(props: any) {
  const [scoreGlobal, setScoreGlobal] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [colorEnergy, setColorEnergy] = useState("");
  const [colorCarbon, setColorCarbon] = useState("");
  const [colorRepair, setColorRepair] = useState("");
  const [lengthResult, setLengthResult] = useState("");
  const idUser = props.idUser;
  const idProduct = props.id;
  const [score, setScore] = useState(props.trendScore);
  const router = useRouter();

  useEffect(() => {
    if ((props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 <= 5) {
      setScoreGlobal("Mauvais");
      setAccentColor("#E15C5C");
    } else {
      setScoreGlobal("Bon");
      setAccentColor("#53C66C");
    }
  }, [props.scoreEnergy, props.scoreCarbon, props.scoreRepair]);

  const handleTrend = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
    const res = await addTrendProduct({ idUser, idProduct });
    if (res) {
      setScore(score + 1);
    }
  };

  const handleDetails = () => {
    router.push(`/product/${props.id}`);
  };

  const handleCompare = () => {
    localStorage.setItem("compare", JSON.stringify(props));
    router.push(`/comparatif`);
  };

  return (
    <div
      key={props._id}
      className="py-2 px-6 w-fit rounded-xl flex border-[1px] border-slate-400 justify-between bg-slate-100 drop-shadow-sm flex-col lg:flex-row gap-6"
    >
      <div className="flex flex-col">
        <div className="b-2  mx-auto">
          <div className="flex gap-4 py-2">
            <button
              className="w-fit py-1 px-2 bg-slate-300 rounded-xl mr-0 text-sm"
              onClick={handleTrend}
            >
              {score}🔥
            </button>
            <div
              style={{ background: accentColor }}
              className="text-center text-sm  py-1 px-3 w-fit rounded-xl text-white"
            >
              {scoreGlobal}
            </div>
          </div>
          <div className="text-lg h-14 overflow-hidden w-[90%]">
            {props.title}
          </div>
        </div>
        <div className="flex gap-8 items-center ">
          <div className="w-36 h-36 bg-slate-500 rounded-lg hidden sm:flex mx-auto my-1"></div>
        </div>
        <div className="flex  gap-2 justify-evenly mt-2 mb-2">
          <button
            className="bg-secondary-color text-sm px-2 py-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-secondary-color hover:border-secondary-color border-2 duration-300 rounded-3xl text-white text-center"
            onClick={handleDetails}
          >
            Détails
          </button>
          <button
            onClick={handleCompare}
            className="border-secondary-color text-sm border-2 px-2 py-1 rounded-3xl text-center text-secondary-color transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-color hover:text-white duration-300"
          >
            Comparer
          </button>
        </div>
      </div>
    </div>
  );
}

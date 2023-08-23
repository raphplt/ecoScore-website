import { useEffect, useState } from "react";
import Image from "next/image";
import { addTrendProduct } from "@/services/users/users.services";
import { useRouter } from "next/router";

export default function ProductCardSquare(props: any) {
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
    if ((props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 <= 3) {
      setScoreGlobal("Mauvais");
      setAccentColor("#53C66C");
    }
    if (
      (props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 > 3 &&
      (props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 <= 5
    ) {
      setScoreGlobal("Moyen");
      setAccentColor("#EEAA5A");
    } else {
      setScoreGlobal("Bon");
      setAccentColor("#53C66C");
    }
  }, [props.scoreEnergy, props.scoreCarbon, props.scoreRepair]);

  useEffect(() => {
    if (props.scoreEnergy > 7) {
      setColorEnergy("#53C66C");
    } else if (props.scoreEnergy > 4) {
      setColorEnergy("#EEAA5A");
    } else {
      setColorEnergy("#E15C5C");
    }
  }, [props.scoreEnergy]);

  useEffect(() => {
    if (props.scoreCarbon > 7) {
      setColorCarbon("#53C66C");
    } else if (props.scoreCarbon > 4) {
      setColorCarbon("#EEAA5A");
    } else {
      setColorCarbon("#E15C5C");
    }
  }, [props.scoreCarbon]);

  useEffect(() => {
    if (props.scoreRepair > 7) {
      setColorRepair("#53C66C");
    } else if (props.scoreRepair > 4) {
      setColorRepair("#EEAA5A");
    } else {
      setColorRepair("#E15C5C");
    }
  }, [props.scoreRepair]);

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
      className="py-4 w-fit rounded-xl flex justify-between bg-slate-100 drop-shadow-sm border-[1px] border-slate-400 flex-col lg:flex-row gap-6"
    >
      <div className="flex flex-col ml-5">
        <div className="b-5">
          <div className="text-xl truncate overflow-hidden w-36">
            {props.title}
          </div>

          <div className="flex gap-4 py-4">
            <button
              className=" w-fit py-1 px-2 bg-slate-300 rounded-xl mr-0 text-sm "
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
        </div>
        <div className="flex gap-8 items-center ">
          <div className="w-36 h-36 bg-slate-500 rounded-lg hidden sm:flex"></div>
        </div>
      </div>
      <div className="flex flex-col sm:mr-5 mx-4 sm:mx-0 justify-center items-center gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={require("../../public/assets/icons/icon-energy.png")}
              alt="Icone énergie"
              className="w-6 h-6"
            />
            <div
              className={`py-2 px-4 bg-opacity-10 bg rounded-3xl flex justify-center text-white drop-shadow-md  
                }`}
              style={{ background: colorEnergy }}
            >
              {props.scoreEnergy}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={require("../../public/assets/icons/icon-carbone.png")}
              alt="Icone carbone"
              className="w-6 h-6"
            />
            <div
              className="py-2 px-4 rounded-3xl flex justify-center text-white drop-shadow-md"
              style={{
                background: colorCarbon,
              }}
            >
              {props.scoreCarbon}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={require("../../public/assets/icons/icon-reparabilite.png")}
              alt="Icone réparabilité"
              className="w-6 h-6"
            />
            <div
              className="py-2 px-4 rounded-3xl flex justify-center text-white drop-shadow-md"
              style={{
                background: colorRepair,
              }}
            >
              {props.scoreRepair}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-evenly mt-2">
          <button
            className="bg-secondary-color text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-secondary-color hover:border-secondary-color border-2 duration-300 px-6 py-2 rounded-3xl text-white text-center"
            onClick={handleDetails}
          >
            Voir les détails
          </button>
          <button
            onClick={handleCompare}
            className="border-secondary-color text-sm border-2 px-6 py-1 rounded-3xl text-center text-secondary-color transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary-color hover:text-white duration-300"
          >
            Comparer
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCardSquare(props: any) {
  const [scoreGlobal, setScoreGlobal] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [colorEnergy, setColorEnergy] = useState("");
  const [colorCarbon, setColorCarbon] = useState("");
  const [colorRepair, setColorRepair] = useState("");
  const [lengthResult, setLengthResult] = useState("");

  useEffect(() => {
    if ((props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 <= 5) {
      setScoreGlobal("Mauvais résultat");
      setAccentColor("#E15C5C");
    } else {
      setScoreGlobal("Bon résultat");
      setAccentColor(`var(--secondary-color)`);
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

  return (
    <div
      key={props._id}
      // style={{ borderColor: accentColor }}
      className="py-6 w-fit  rounded-xl flex justify-between bg-slate-100 drop-shadow-md flex-col lg:flex-row gap-8"
    >
      <div className="flex flex-col ml-5">
        {/* <div>{props.trendScore}🔥</div> */}
        <div className="text-2xl mb-5">
          {props.title}
          <div style={{ color: accentColor }} className="font-semibold text-xl">
            {scoreGlobal}
          </div>
        </div>
        <div className="flex gap-8 items-center ">
          <div className="w-36 h-36 bg-slate-500 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col mr-5 justify-center gap-5">
        <button className="text-right ">{props.trendScore}🔥</button>
        <div className="flex gap-5">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={require("../../public/assets/icons/icon-energy.png")}
              alt="Icone énergie"
              className="w-6 h-6"
            />
            <div
              className="py-2 px-4 rounded-3xl flex justify-center"
              style={{
                background: colorEnergy,
              }}
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
              className="py-2 px-4 rounded-3xl flex justify-center"
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
              className="py-2 px-4 rounded-3xl flex justify-center"
              style={{
                background: colorRepair,
              }}
            >
              {props.scoreRepair}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-evenly mt-2">
          <div className="bg-secondary-color px-4 py-2 rounded-xl text-white text-center">
            Voir les détails
          </div>
          <div className="border-secondary-color border-2 px-2 py-1 rounded-xl text-center text-secondary-color">
            Comparer
          </div>
        </div>
      </div>
    </div>
  );
}

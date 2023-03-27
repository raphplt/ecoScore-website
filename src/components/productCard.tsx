import { useEffect, useState } from "react";

export default function ProductCard(props: any) {
  const [scoreGlobal, setScoreGlobal] = useState("");
  const [accentColor, setAccentColor] = useState("");
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
  return (
    <div
      key={props._id}
      style={{ borderColor: accentColor }}
      className="mt-10 w-[65%] py-6 bg-[#efefef] mx-auto mb-10 rounded-xl flex justify-between border-2"
    >
      <div className="w-40 h-28 ml-5 bg-slate-500 rounded-lg"></div>
      <div className="pl-5 w-96">
        <div className="text-2xl mb-5">{props.title}</div>
        <div>Type : {props.type}</div>
        <div style={{ color: accentColor }} className="font-semibold mt-1">
          {scoreGlobal}
        </div>
      </div>
      <div className="flex gap-5 justify-evenly w-full items-center">
        <div>Score énergétique: {props.scoreEnergy}</div>
        <div>Score carbone : {props.scoreCarbon}</div>
        <div>Score de réparabilité : {props.scoreRepair}</div>
      </div>
    </div>
  );
}

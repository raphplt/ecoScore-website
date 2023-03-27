import { useEffect, useState } from "react";

export default function ProductCard(props: any) {
  const [scoreGlobal, setScoreGlobal] = useState("");
  useEffect(() => {
    if ((props.scoreEnergy + props.scoreCarbon + props.scoreRepair) / 3 <= 5) {
      setScoreGlobal("Mauvais résultat");
    } else {
      setScoreGlobal("Bon résultat");
    }
  }, [props.scoreEnergy, props.scoreCarbon, props.scoreRepair]);
  return (
    <div
      key={props._id}
      className="mt-10 w-[65%] py-6 bg-slate-200 mx-auto mb-10 rounded-xl flex justify-between border-2 border-secondary-color"
    >
      <div className="w-40 h-28 ml-5 bg-slate-500 rounded-lg"></div>
      <div className="pl-5 w-96">
        <div className="text-2xl mb-5">{props.title}</div>
        <div>Type : {props.type}</div>
        <div>{scoreGlobal}</div>
      </div>
      <div className="flex gap-5 justify-evenly w-full items-center">
        <div>Score énergétique: {props.scoreEnergy}</div>
        <div>Score carbone : {props.scoreCarbon}</div>
        <div>Score de réparabilité : {props.scoreRepair}</div>
      </div>
    </div>
  );
}

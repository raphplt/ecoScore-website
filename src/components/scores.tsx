import { useState, useEffect } from "react";
import Image from "next/image";

export default function Score(props: any) {
  const [scoreGlobal, setScoreGlobal] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [colorEnergy, setColorEnergy] = useState("");
  const [colorCarbon, setColorCarbon] = useState("");
  const [colorRepair, setColorRepair] = useState("");

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
    <div className="hidden sm:flex flex-col gap-2 ">
      <div className="flex items-center gap-2">
        <Image
          src={require("../../public/assets/icons/icon-energy.png")}
          alt="Icone énergie"
          className="w-6 h-6"
        />
        <div
          className="py-1 pl-2"
          style={{
            width: 75 * props.scoreEnergy,
            background: colorEnergy,
          }}
        >
          {props.scoreEnergy}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={require("../../public/assets/icons/icon-carbone.png")}
          alt="Icone carbone"
          className="w-6 h-6"
        />
        <div
          className="py-1 pl-2"
          style={{
            width: 75 * props.scoreCarbon,
            background: colorCarbon,
          }}
        >
          {props.scoreCarbon}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={require("../../public/assets/icons/icon-reparabilite.png")}
          alt="Icone réparabilité"
          className="w-6 h-6"
        />
        <div
          className="py-1 pl-2"
          style={{
            width: 75 * props.scoreRepair,
            background: colorRepair,
          }}
        >
          {props.scoreRepair}
        </div>
      </div>
    </div>
  );
}

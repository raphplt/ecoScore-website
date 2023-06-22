import { useEffect, useState } from "react";
import Image from "next/image";
import Score from "./scores";
import { useRouter } from "next/router";

export default function ProductCard(props: any) {
  const router = useRouter();
  const handleDetails = () => {
    router.push(`/product/${props.id}`);
  };
  return (
    <div
      key={props._id}
      // style={{ borderColor: accentColor }}
      className="mt-10 py-6 sm:w-3/5 w-4/5 mx-auto mb-10 rounded-xl flex justify-between bg-slate-100 shadow-md flex-col lg:flex-row"
    >
      <div className="flex flex-col ml-5">
        <div className="sm-relative flex gap-3">
          <div className="sm:hidden relative h-12 w-12 bg-slate-500 rounded-lg"></div>
        </div>
        <div className="flex gap-8 items-center ">
          <div className="w-36 h-36 bg-slate-500 rounded-lg hidden sm:flex"></div>
          <Score
            scoreEnergy={props.scoreEnergy}
            scoreCarbon={props.scoreCarbon}
            scoreRepair={props.scoreRepair}
          />
        </div>
      </div>
      <div className="flex flex-col mr-5 justify-center gap-5">
        <div className="w-full sm:w-96 h-36 border-2 border-gray-500 rounded-lg pl-2 hidden sm:flex flex-col">
          Infos supplémentaires
          <div>Lorem Ipsum</div>
          <div>Lorem Ipsum</div>
          <div>Lorem Ipsum</div>
        </div>
        <div className="flex gap-5 justify-evenly">
          <button
            className="bg-secondary-color hover:bg-[#2e7727] px-4 py-2 rounded-xl text-white text-center"
            onClick={handleDetails}
          >
            Voir les détails
          </button>
          <div className="border-secondary-color text-center border-2 px-2 py-1 sm:px-4 sm:py-2 rounded-xl text-secondary-color">
            Ajouter au comparateur
          </div>
        </div>
      </div>
    </div>
  );
}

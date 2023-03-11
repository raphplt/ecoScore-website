import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import TopButton from "./topbutton";

export default function Footer() {
    return (
  <div>
    <TopButton
    src={require("../../public/assets/topbutton.png")}
    alt="scrolltopbutton"/>
     <footer className="w-full pb-2 mt-8 flex-col bg-[#234D1F]">
            <div className="bg-[#326C2D] pt-2 ">
                <div className="w-full md:full mb-4 ">
                <h4 className="text-white mb-2 text-[14px] flex divide-x justify-center items-center">
                        <p className="text-center px-14">A propos</p>
                        <p className="text-center px-14">Pour mieux nous connaître</p>
                        <p className="text-center px-14">Besoin d&#39;aide ?</p>
                    </h4>
                        <p className="text-gray-400 text-[14px]">...</p>
                        <p className="text-gray-400 text-[14px]">...</p>
                        <p className="text-gray-400 text-[14px]">...</p>
                </div>
            </div>
            <div className="w-full md:full px-4 ">
                <h4 className="text-white mb-2 text-[13px] underline divide-x flex justify-center">
                    <p className="text-center px-14">Conditions générales de vente</p>
                    <p className="text-center px-14">Vos informations personnelles</p>
                    <p className="text-center px-14">Cookies</p>
                    <p className="text-center px-14">Annonces basées sur vos centres d’intérêt</p>
                </h4>
                <p className="text-gray-400 text-[12px] pt-2 flex flex-col items-center justify-between">© 2023, GreenBean.com Inc. ou ses affiliés</p>
            </div>
    </footer>
  </div>
  );
}
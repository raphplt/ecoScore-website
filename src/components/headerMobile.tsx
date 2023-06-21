import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex sm:hidden items-center justify-between w-[90%] mx-auto pt-2">
        <Link href={"./"}>
          <Image
            src={require("../../public/assets/ecoscoreLogo.png")}
            alt="logo"
            width={35}
            height={35}
          />
        </Link>

        <button
          className="flex items-center justify-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src={require("../../public/assets/icons/menu-hamb.png")}
            alt="menu"
          />
        </button>
        <div
          className={`absolute h-[100vh] top-0 left-0 w-full bg-white z-10 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="pt-20 text-center flex flex-col gap-10 text-xl">
            <li className="my-4">
              <Link
                href={"./"}
                className="font-bold text-gray-800 hover:text-gray-600"
              >
                Accueil
              </Link>
            </li>
            <li className="my-4">
              <Link
                href={"./discover"}
                className="font-bold text-gray-800 hover:text-gray-600"
              >
                Découvrir
              </Link>
            </li>
            <li className="my-4">
              <Link
                href={"./comparatif"}
                className="font-bold text-gray-800 hover:text-gray-600"
              >
                Comparatif
              </Link>
            </li>
            <li className="my-4">
              <Link
                href={"./forum"}
                className="font-bold text-gray-800 hover:text-gray-600"
              >
                Forum
              </Link>
            </li>
            <li className="my-4">
              <Link
                href={"./quizz"}
                className="font-bold text-gray-800 hover:text-gray-600"
              >
                Quizz
              </Link>
            </li>
            <li className="my-4"></li>
            <li>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Image
                  src={require("../../public/assets/icons/menu-hamb.png")}
                  alt="menu"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBarHeader from "./searchBarHeader";

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [visible, setVisible] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath !== "/") {
      setIsShowing(true);
      setOpacity(100);
    } else {
      setIsShowing(false);
    }
  }, [asPath]);

  return (
    <div className="sm:flex-row sm:items-center sm:justify-between sm:w-[95%] sm:mx-auto sm:pt-2 sm:flex hidden">
      <Link href={"./"}>
        <Image
          src={require("../../public/assets/ecoscoreLogo.png")}
          alt="logo    "
        />
      </Link>
      <div className="flex flex-row lg:gap-24 sm:gap-12 text-[#1B4332] font-semibold ml-64">
        <div>
          <Link href={"./"}>Accueil</Link>
        </div>
        <div>
          <Link href={"./discover"}>Découvrir</Link>
        </div>
        <div>
          <Link href={"./comparatif"}>Comparatif</Link>
        </div>
        <div>
          <Link href={"./forum"}>Forum</Link>
        </div>
        <div>
          <Link href={"./quizz"}>Quizz</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div style={{ opacity: opacity }}>
          <SearchBarHeader />
        </div>
        <button onClick={() => setVisible(!visible)}>
          <Image
            src={require("../../public/assets/profilIcon.png")}
            alt="logo"
          />
        </button>
        {visible && (
          <div className="bg-white flex flex-col gap-2 rounded-lg absolute right-8 top-16 px-20 py-6 drop-shadow-md z-10">
            <Link href={"./login"}>
              <div className="text-center bg-slate-200 rounded-xl py-2 px-10 drop-shadow-sm">
                Se connecter
              </div>
            </Link>
            <div className="text-center">ou</div>
            <Link href={"./register"}>
              <div className="text-center bg-slate-200 rounded-xl py-2 px-10 drop-shadow-sm">
                S&apos;inscrire
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

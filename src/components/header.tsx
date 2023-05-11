import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBarHeader from "./searchBarHeader";

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);

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

        <Link href={"./login"}>
          <Image
            src={require("../../public/assets/profilIcon.png")}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sm:flex-row sm:items-center sm:justify-between sm:w-[90%] sm:mx-auto sm:pt-2 sm:flex hidden">
      <Link href={"./"}>
        <Image
          src={require("../../public/assets/ecoscoreLogo.png")}
          alt="logo    "
        />
      </Link>
      <div className="flex flex-row lg:gap-24 sm:gap-12 text-[#1B4332] font-semibold">
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
      <Link href={"./login"}>
        <Image src={require("../../public/assets/profilIcon.png")} alt="logo" />
      </Link>
    </div>
  );
}

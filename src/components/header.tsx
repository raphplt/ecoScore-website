import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto pt-2">
      <Link href={"./"}>
        <Image
          src={require("../../public/assets/ecoscoreLogo.png")}
          alt="logo    "
        />
      </Link>
      <div className="flex flex-row gap-24">
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

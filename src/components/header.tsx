import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto mt-2">
      <Image
        src={require("../../public/assets/ecoscoreLogo.png")}
        alt="logo    "
      />
      <div className="flex flex-row gap-24">
        <div>Accueil</div>
        <div>Recherche avancée</div>
        <div>Liste</div>
        <div>Forum</div>
        <div>Quizz</div>
      </div>
      <Image
        src={require("../../public/assets/profilIcon.png")}
        alt="logo    "
      />
    </div>
  );
}

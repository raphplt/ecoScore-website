import { api } from "@/services";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ShortCutButton(props: any) {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Envoie une requête GET à l'API avec les critères de recherche
    const response = await api.get(`/products/search?query=${props.title}`);
    // Met à jour les résultats de la recherche dans le contexte
    // setResults(response.data);
    localStorage.setItem("searchResults", JSON.stringify(response.data));
    if (router.pathname === "/") {
      router.push("/resultats");
    } else router.reload();
  };
  return (
    <div className="w-20 h-20 rounded-[30%] backdrop-blur-sm bg-white/30 hover:bg-white/10 flex items-center justify-center mx-5 hover:cursor-pointer">
      <button onClick={handleSubmit}>
        <div className="flex items-center justify-center">
          <Image src={props.src} width={40} height={40} alt={props.alt} />
        </div>
      </button>
    </div>
  );
}

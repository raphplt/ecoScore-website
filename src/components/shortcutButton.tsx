import { api } from "@/services";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ShortCutButton(props: any) {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await api.get(`/products/search?query=${props.title}`);
    localStorage.setItem("searchResults", JSON.stringify(response.data));
    if (router.pathname === "/") {
      router.push("/resultats");
    } else router.reload();
  };
  return (
    <div>
      <div className="w-16 h-16 rounded-[30%] bg-[#E2F1E3] shadow-md flex items-center justify-center mx-5 hover:cursor-pointer">
        <button onClick={handleSubmit}>
          <div className="flex items-center justify-center">
            <Image src={props.src} width={35} height={35} alt={props.alt} />
          </div>
        </button>
      </div>
      <div className="text-center mt-3 text-sm text-black">{props.title}</div>
    </div>
  );
}

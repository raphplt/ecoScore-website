import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import SearchBarHeader from "./searchBarHeader";

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();

  const { asPath } = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
      console.log(JSON.parse(user), user);
    }
  }, []);

  useEffect(() => {
    if (asPath !== "/") {
      setIsShowing(true);
      setOpacity(100);
    } else {
      setIsShowing(false);
    }
  }, [asPath]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    router.reload();
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md sm:w-[100%]">
      <div className="sm:flex-row sm:items-center sm:justify-between sm:w-[95%] sm:mx-auto sm:pt-2 sm:flex hidden ">
        <Link href={"./"}>
          <Image
            src={require("../../public/assets/ecoscoreLogo.png")}
            alt="logo"
            className="w-16 "
          />
        </Link>
        <div className="flex flex-row lg:gap-24 sm:gap-12 text-[#1B4332] font-semibold ml-64">
          <div>
            <Link href={"./"}>Accueil</Link>
          </div>
          <div>
            <Link href={"/discover"}>Découvrir</Link>
          </div>
          <div>
            <Link href={"/comparatif"}>Comparatif</Link>
          </div>
          <div>
            <Link href={"/forum"}>Forum</Link>
          </div>
          <div>
            <Link href={"/quizz"}>Quizz</Link>
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
              {!user ? (
                <div>
                  <Link href={"./login"}>
                    <div className="text-center bg-slate-300 rounded-2xl py-2 px-12 drop-shadow-md">
                      Se connecter
                    </div>
                  </Link>
                  <div className="text-center my-2">ou</div>
                  <Link href={"./register"}>
                    <div className="text-center bg-slate-300 rounded-2xl py-2 px-12 drop-shadow-md">
                      S&apos;inscrire
                    </div>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href={"./user"}>
                    <div className="text-center bg-slate-300 rounded-2xl py-2 px-12 drop-shadow-md">
                      Mon compte
                    </div>
                  </Link>
                  <div className="text-center my-2">ou</div>
                  <Link href={"./"} onClick={handleLogout}>
                    <div className="text-center bg-slate-300 rounded-2xl py-2 px-12 drop-shadow-md">
                      Se déconnecter
                    </div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { checkEmail, register } from "@/services/users/users.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOK, setEmailOK] = useState("");
  const [requestOK, setRequestOK] = useState(false);
  const router = useRouter();

  const handleEmail = async (e: any) => {
    setEmail(e);
    const emailIsOK = await checkEmail(e);
    setEmailOK(emailIsOK);
    if (email !== "" && !emailOK && username !== "" && password !== "") {
      setRequestOK(true);
    }
  };

  const handleUsername = (e: any) => {
    setUsername(e);
    if (email !== "" && !emailOK && username !== "" && password !== "") {
      setRequestOK(true);
    }
  };

  const handlePassword = (e: any) => {
    setPassword(e);
    if (email !== "" && !emailOK && username !== "" && password !== "") {
      setRequestOK(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (requestOK) {
      try {
        await register({
          username: username,
          email: email,
          password: password,
        });
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-[#E7F1E6]">
      <MetaData />
      <Header />
      <div className="sm:mt-36 sm:w-1/2 w-10/12 mx-auto bg-white mb-[500px] sm:grid sm:grid-cols-2 rounded-xl">
        <div className="py-20 bg-white rounded-l-xl">
          <h1 className="text-center text-3xl mb-16">S&#39;inscrire</h1>
          <div className="flex flex-col items-center gap-10 ">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Adresse mail"
                onChange={(e) => handleEmail(e.target.value)}
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
              />
              <div className="h-[2px] w-full bg-secondary-color mb-1"></div>
              <div>
                {emailOK ? (
                  <div className="ml-2mb-8 text-red-500">
                    Email déjà utilisé
                  </div>
                ) : (
                  <div> &ensp;</div>
                )}
              </div>
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                onChange={(e) => handleUsername(e.target.value)}
                required
                placeholder="Pseudonyme"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
              />
              <div className="h-[2px] w-full bg-secondary-color mb-8"></div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                onChange={(e) => handlePassword(e.target.value)}
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
                required
              />
              <div className="h-[2px] w-full bg-secondary-color mb-8"></div>

              {/* <input
                type="password"
                id="Confirmpassword"
                name="Confirmpassword"
                placeholder="Confirmer le mot de passe"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
                required
              />
              <div className="h-[2px] w-full bg-secondary-color mb-12"></div> */}
              <button
                type="submit"
                className={`${
                  requestOK
                    ? " bg-secondary-color"
                    : "bg-slate-400 cursor-default"
                }  text-white px-5 py-2 rounded-lg mt-12 mb-4`}
              >
                Créer un compte
              </button>
              <p className="text-sm text-center mt-4">
                <Link href={"/login"}>
                  Vous avez deja un compte ? Se connecter
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div
          className="bg-green-200 py-20 rounded-r-xl hidden sm:flex"
          style={{
            backgroundImage: `url(${"/assets/bg/bg-1.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <Footer />
    </div>
  );
}

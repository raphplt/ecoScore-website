import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Link from "next/link";

export default function Register() {
  return (
    <div className="bg-[#E7F1E6]">
      <MetaData />
      <Header />
      <div className="sm:mt-36 sm:w-1/2 w-10/12 mx-auto bg-white mb-[500px] sm:grid sm:grid-cols-2 rounded-xl">
        <div className="py-20 bg-white rounded-l-xl">
          <h1 className="text-center text-3xl mb-16">S&#39;inscrire</h1>
          <div className="flex flex-col items-center gap-10 ">
            <form className="flex flex-col ">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Adresse mail"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
              />
              <div className="h-[2px] w-full bg-secondary-color mb-12"></div>
              <input
                type="text"
                id="pseudo"
                name="pseudo"
                required
                placeholder="Pseudonyme"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
              />
              <div className="h-[2px] w-full bg-secondary-color mb-12"></div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
                required
              />
              <div className="h-[2px] w-full bg-secondary-color mb-12"></div>

              <input
                type="password"
                id="Confirmpassword"
                name="Confirmpassword"
                placeholder="Confirmer le mot de passe"
                className="sm:w-[300px] w-10/12 pl-1 py-1 border-secondary-color rounded-lg "
                required
              />
              <div className="h-[2px] w-full bg-secondary-color mb-12"></div>
              <button
                type="submit"
                className="bg-secondary-color text-white px-5 py-2 rounded-lg mt-12 mb-4"
              >
                Connexion
              </button>
              <p className="text-sm text-center mt-4">
                <Link href={"/login"}>
                  Vous n&#39;avez pas de compte ? Inscription
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

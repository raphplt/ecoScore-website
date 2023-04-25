import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";

export default function Forum() {
  return (
    <div className="bg-slate-200 ">
      <MetaData />
      <Header />
      <div className="mt-36 w-1/2 mx-auto bg-white mb-[500px] grid grid-cols-2 rounded-xl">
        <div className="py-20 bg-white rounded-l-xl">
          <h1 className="text-center text-3xl mb-12">Se connecter</h1>
          <div className="flex flex-col items-center gap-10 ">
            <form className="flex flex-col ">
              <label htmlFor="email" className="mb-2">
                Adresse mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-[300px] pl-3 py-1 mb-6 bg-white border-b-2 border-secondary-color"
              />

              <label htmlFor="password" className="mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-[300px] pl-3 py-1 mb-6 bg-white border-b-2 border-secondary-color"
                required
              />

              <button
                type="submit"
                className="bg-secondary-color text-white px-5 py-2 rounded-lg mt-6 mb-2"
              >
                Connexion
              </button>
              <p className="text-sm text-center mt-2">
                Vous n&#39;avez pas de compte ? Inscription
              </p>
            </form>
          </div>
        </div>
        <div
          className="bg-green-200 py-20 rounded-r-xl"
          style={{
            backgroundImage: `url(${"/assets/bg/bg-7.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <Footer />
    </div>
  );
}

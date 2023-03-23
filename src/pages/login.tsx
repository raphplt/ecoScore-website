import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Forum() {
  return (
    <div className="bg-slate-200 ">
      <Header />
      <div className="mt-36 w-1/2 mx-auto bg-white mb-[500px] grid grid-cols-2 rounded-xl">
        <div className="py-20 bg-white rounded-l-xl">
          <h1 className="text-center text-3xl mb-10">Se connecter</h1>
          <div className="flex flex-col items-center gap-10 ">
            <form className="flex flex-col items-center gap-10 ">
              <label htmlFor="email">Adresse mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-slate-300 rounded-lg w-[300px] pl-3 py-1"
              />

              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-slate-300 rounded-lg w-[300px] pl-3 py-1"
                required
              />

              <button
                type="submit"
                className="bg-secondary-color text-white px-5 py-2 rounded-lg"
              >
                Connexion
              </button>
            </form>
          </div>
        </div>
        <div className="bg-green-200 py-20 rounded-r-xl"></div>
      </div>

      <Footer />
    </div>
  );
}

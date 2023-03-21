import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Forum() {
  return (
    <div>
      <Header />
      <div className="mt-36 w-1/3 mx-auto">
        <h1 className="text-center text-3xl mb-10">Bienvenue à Ecoscore</h1>
        <div className="flex flex-col items-center gap-10">
          <p>Adresse mail</p>
          <p>Mot de passe</p>
          <button>Connexion</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

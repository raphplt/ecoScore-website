import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";

export default function Comparatif() {
  return (
    <div>
      <Header />
      <MetaData />
      <div className="w-1/2 pt-8 mx-auto mt-24 bg-slate-200 pb-10 mb-48 rounded-xl">
        <h1 className="text-center mb-10">Comparatif</h1>
        <div className="flex justify-around mb-96">
          <div>Choisir un produit à comparer</div>
          <div>Choisir un produit à comparer</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

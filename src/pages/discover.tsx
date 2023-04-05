import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";

export default function Discover() {
  return (
    <div>
      <Header />
      <MetaData />
      <div className="mt-5">
        <h1 className="text-center text-3xl">Découvertes</h1>
        <div>
          <h2 className="ml-24 mt-12 text-xl">Catégories tendances</h2>
          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div></div>
          </div>
          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div></div>
          </div>
          <div>
            <h3 className="ml-12 mt-6 h-48">Téléphonie</h3>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

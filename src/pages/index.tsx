import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import ShortCutButton from "@/components/shortcutButton";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/services/categories/categories.services";
import HeaderMobile from "@/components/headerMobile";

interface Category {
  _id: string;
  cat: string;
  subCat: Array<string>;
  image: string;
}

export default function Index() {
  const [data, setData] = useState<Category[]>([]);
  const [bgColor, setBgColor] = useState("var(--primary-color)");
  const [bgImg, setBgImg] = useState("");


  const changeColor = () => {
    if (bgColor === "var(--primary-color-dark)") {
      setBgColor("var(--primary-color)");
    } else {
      setBgColor("var(--primary-color-dark)");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCategories();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#E7F1E6]">
      <MetaData />
      <div
        style={{
          backgroundImage: `url(${"/assets/svg/waveIndex.svg"})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh]"
      >
        <Header />
        <HeaderMobile />
        {/* <Image
          src={"./assets/svg/waveIndex.svg"}
          width={1000}
          height={1000}
          alt="background image"
        /> */}
        <div className="bg-white w-10/12 lg:w-2/5 mx-auto rounded-xl shadow-md">
          <h1 className="lg:text-[70px] text-[54px] text-secondary-color mt-8 lg:mt-24 font-bold text-center mb-16 font-libre pt-5">
            Eco score
          </h1>
          <SearchBar />

          <div className="lg:w-[80%] w-[100%] mx-auto flex gap-10 justify-center flex-wrap mt-16 sm:pb-[150px] pb-12">
            {data &&
              data.map((result) => (
                <ShortCutButton
                  key={result._id}
                  src={result.image}
                  title={result.cat}
                  alt="icon"
                />
              ))}
          </div>
        </div>
        <div className="pb-32">
          <h2 className="mb-16 mt-28 py-5 px-16 rounded-xl text-xl w-fit mx-auto text-[#1B4332] font-semibold backdrop-blur-sm bg-white/30">
            En utilisant EcoScore, vous participez à un monde plus vert:
          </h2>
          <div className="flex items-center justify-evenly mt-28">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className=" rounded-[50%] bg-[#579452] text-white w-28 h-28 flex flex-col items-center shadow-md justify-center">
                <p className=" text-4xl ">129.1</p>
                <p className="">Mrds</p>
              </div>
              <div className="py-1 px-2  rounded-xl text-lg w-fit mx-auto text-[#1B4332] font-semibold backdrop-blur-sm bg-white/30">
                Chiffre d&apos;affaire du e-commerce en 2021
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className=" rounded-[50%] bg-[#579452] text-white w-28 h-28 flex flex-col items-center shadow-md justify-center">
                <p className=" text-4xl ">4.2</p>
              </div>
              <div className="py-1 px-2  rounded-xl text-lg w-fit mx-auto text-[#1B4332] font-semibold backdrop-blur-sm bg-white/30">
                Paniers validés par acheteur par mois
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className=" rounded-[50%] bg-[#579452] text-white w-28 h-28 flex flex-col items-center shadow-md justify-center">
                <p className=" text-4xl ">41.8</p>
                <p className="">millions</p>
              </div>
              <div className="py-1 px-2  rounded-xl text-lg w-fit mx-auto text-[#1B4332] font-semibold backdrop-blur-sm bg-white/30">
                de Français ont acheté sur Internet
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 w-full gap-y-48 mb-24 mt-96">
        <div className="mx-auto w-2/3">
          <div className=" text-left mt-5 backdrop-blur-sm bg-white/30 rounded-xl py-8 px-24">
            <h2 className="text-2xl mb-4">
              L&apos;empreinte écologique cachée de l&apos;achat en ligne
            </h2>
            Saviez-vous que nos habitudes de consommation en ligne ont un impact
            considérable sur l&apos;environnement ? L&apos;achat en ligne est en
            constante augmentation, mais cette pratique n&apos;est
            malheureusement pas sans conséquences sur notre planète. Selon des
            études récentes, le commerce électronique est responsable d&apos;une
            augmentation significative des émissions de gaz à effet de serre.
            Rien qu&apos;au cours de l&apos;année dernière, les livraisons de
            colis ont généré près de 10% des émissions totales de CO2 dans
            certains pays. Il est temps de prendre conscience de
            l&apos;empreinte écologique de nos achats en ligne et de réfléchir à
            des solutions pour consommer de manière plus responsable
          </div>
        </div>
        <Image
          src={require("../../public/assets/index/indexImage1.png")}
          alt="Photo d'illustration"
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
        />
        <Image
          src={require("../../public/assets/index/indexImage2.png")}
          alt="Photo d'illustration"
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
        />
        <div className="mx-auto w-2/3">
          <div className=" text-left mt-5 backdrop-blur-sm bg-white/30 rounded-xl  py-8 px-24">
            <h2 className="text-2xl mb-4">
              Changez le cours de votre consommation en ligne
            </h2>
            Chez Ecoscore, nous croyons en la nécessité d&apos;un changement de
            mentalité vis-à-vis de notre consommation en ligne. Il est essentiel
            d&apos;adopter des pratiques plus durables pour minimiser notre
            impact sur l&apos;environnement. En utilisant notre plateforme, vous
            pouvez contribuer à cette transition vers une consommation
            responsable. Nous avons développé un outil de recherche et de
            comparaison de produits écologiques qui vous permet de trouver
            facilement des articles respectueux de l&apos;environnement tout en
            répondant à vos besoins. En prenant en compte des critères tels que
            la durabilité des matériaux, l&apos;efficacité énergétique et la
            provenance, nous vous fournissons les informations nécessaires pour
            prendre des décisions d&apos;achat éclairées.
          </div>
        </div>
        <div className="mx-auto w-2/3">
          <div className=" text-left mt-5 backdrop-blur-sm bg-white/30 rounded-xl  py-8 px-24">
            <h2 className="text-2xl mb-4">
              Façonnons un avenir durable à chaque clic de souris
            </h2>
            En utilisant notre outil, vous faites un pas concret vers un mode de
            consommation plus respectueux de la planète. Chaque choix compte, et
            chaque action individuelle peut faire une différence significative.
            En optant pour des produits écologiques, vous contribuez à réduire
            les émissions de CO2, vous soutenez des entreprises engagées dans
            des pratiques durables et vous encouragez l&apos;innovation
            environnementale. De plus, choisir des produits de qualité qui
            durent plus longtemps permet de réduire la quantité de déchets
            générés par notre société de consommation. Ensemble, nous avons le
            pouvoir de créer un avenir plus durable. Rejoignez-nous dans cette
            démarche responsable et utilisez notre outil dès aujourd&apos;hui
            pour faire des achats en ligne qui préservent notre planète pour les
            générations futures.
          </div>
        </div>
        <Image
          src={require("../../public/assets/index/indexImage1.png")}
          alt="Photo d'illustration"
          className="mx-auto border-4 rounded-[50%] border-secondary-color"
        />
      </div>
      <Footer />
    </div>
  );
}

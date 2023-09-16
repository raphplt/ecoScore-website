import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Question from "@/components/question";
import { fetchQuizz } from "@/services/quizz/quizz.service";
import { useState, useEffect } from "react";

export default function Quizz() {
  const [quizz, setQuizz]: any = useState([]);
  const [quizzId, setQuizzId]: any = useState(0);
  const [showQuizz, setShowQuizz] = useState(false);
  const [quizzDatas, setQuizzDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchQuizz();
      setQuizz(result);
    };
    fetchData();
  }, []);

  const startQuizz = () => {
    setQuizzId(1);
    setShowQuizz(true);
  };

  return (
    <div>
      <MetaData />
      <Header />
      {!showQuizz && (
        <div className="mx-auto flex bg-[#E2F1E3] w-fit flex-col gap-12 mt-24 text-center py-24 px-24 rounded-lg drop-shadow-md">
          <h1 className="text-3xl font-libre">
            Connaissez vous l`&apos;impact de vos achats en ligne sur la planète
            ?
          </h1>
          <h2 className="text-xl">Répondez à notre quizz pour le savoir !</h2>
          <button
            onClick={startQuizz}
            className="rounded-3xl mt-8 w-fit mx-auto drop-shadow-md px-20 py-3 bg-[#3f8039] hover:bg-[#59ad52] text-white"
          >
            Commencer
          </button>
        </div>
      )}
      <div>
        {quizzId === quizz.length + 1 ? (
          <div>
            <h1 className="text-3xl font-libre text-center mt-24">
              Merci d&apos;avoir répondu à notre quizz !
            </h1>
            <div> Vos réponses :{JSON.stringify(quizzDatas)}</div>
          </div>
        ) : null}
      </div>
      <div className="h-[90vh]">
        {quizz &&
          showQuizz &&
          quizz
            .slice(quizzId - 1, quizzId)
            .map((quizz: any) => (
              <Question
                key={quizz._id}
                {...quizz}
                quizzId={quizzId}
                setQuizzId={setQuizzId}
                quizzDatas={quizzDatas}
                setQuizzDatas={setQuizzDatas}
              />
            ))}
      </div>
      <Footer />
    </div>
  );
}

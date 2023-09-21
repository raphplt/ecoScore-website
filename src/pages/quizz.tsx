import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import Question from "@/components/question";
import { fetchQuizz } from "@/services/quizz/quizz.service";
import { useState, useEffect } from "react";

export default function Quizz() {
  const [quizz, setQuizz]: any = useState({});
  const [quizzId, setQuizzId]: any = useState(0);
  const [showQuizz, setShowQuizz] = useState(false);
  const [quizzDatas, setQuizzDatas] = useState([]);
  // const [quizzStep, setQuizzStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchQuizz();
      setQuizz(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const size = window.innerWidth;
      setWindowWidth(size);
    }
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
        <div className="mx-auto flex bg-[#b6e9b9] w-2/3 h-[70vh] flex-col gap-12 mt-24 text-center py-24 px-24 rounded-xl drop-shadow-md">
          <div className="flex items-start gap-20 flex-col mx-auto w-full">
            <h1 className="text-4xl leading-relaxed w-1/3 text-[#20311f] text-left">
              Connaissez vous l&apos;impact de vos achats en ligne sur la
              planète ?
            </h1>
            <button
              onClick={startQuizz}
              className="group relative py-3 w-fit px-12 overflow-hidden rounded-lg bg-[#377431] text-lg shadow"
            >
              <div className="absolute inset-0 w-3 bg-[#49b440]  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-white">
                Commencer
              </span>
            </button>
          </div>
        </div>
      )}
      <div>
        {quizzId === quizz.length + 1 ? (
          <div>
            <h1 className="text-3xl font-libre text-center mt-24">
              Merci d&apos;avoir répondu à notre quizz !
            </h1>
            <div className="w-1/2 text-center mx-auto mt-24">
              Vos réponses :{JSON.stringify(quizzDatas)}
            </div>
          </div>
        ) : null}
      </div>
      <div className="h-[100vh]">
        {quizz &&
          showQuizz &&
          quizz.slice(quizzId - 1, quizzId).map((quizz: any) => (
            <div
              key={quizz._id}
              className="flex flex-col h-full py-24 justify-between"
            >
              <Question
                key={quizz._id}
                {...quizz}
                quizzId={quizzId}
                setQuizzId={setQuizzId}
                quizzDatas={quizzDatas}
                setQuizzDatas={setQuizzDatas}
              />
              <div className="h-6 w-full bg-slate-300">
                <div
                  className="h-6 bg-[#57bd61] rounded-r-xl"
                  style={{
                    width:
                      (quizzId - 1) *
                      ((windowWidth - windowWidth * 0.05) /
                        Object.keys(quizz).length),
                  }}
                ></div>
              </div>
            </div>
          ))}
      </div>
      {!showQuizz && <Footer />}
    </div>
  );
}

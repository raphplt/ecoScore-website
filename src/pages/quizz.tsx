import Footer from "@/components/footer";
import Header from "@/components/header";
import MetaData from "@/components/metadatas";
import { fetchQuizz } from "@/services/quizz/quizz.service";
import { useState, useEffect } from "react";

export default function Quizz() {
  const [quizz, setQuizz]: any = useState([]);
  const [quizzId, setQuizzId]: any = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchQuizz();
      setQuizz(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <MetaData />
      <Header />
      <p>C&#39;est la page pour le quizz</p>
      <div>
        {quizz &&
          quizz.slice(quizzId - 1, quizzId).map((quizz: any) => (
            <div key={quizz._id}>
              <h1>{quizz.title}</h1>
              <p>{quizz.category}</p>
              <button onClick={() => setQuizzId(quizzId + 1)}>Valider</button>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

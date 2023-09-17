export default function Question(props: any) {
  const handleClick = (answer: any) => {
    props.setQuizzDatas([...props.quizzDatas, answer]);
    props.setQuizzId(props.quizzId + 1);
  };

  return (
    <div key={props._id} className="mx-auto flex w-fit mt-24 flex-col">
      <h1 className="text-xl font-semibold mb-4">{props.title}</h1>
      <div className="flex flex-col items-center gap-5 mt-4">
        {props.answers.map((answer: any) => (
          <button
            key={answer.title}
            className=" border-[1px] flex justify-between items-center hover:border-[#67a344] border-[#b7c2b0] w-1/2 px-5 py-2 rounded-xl"
            onClick={() => handleClick(answer)}
          >
            <p className="w-fit text-lg">{answer.name}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

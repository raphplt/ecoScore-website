import React, { useEffect, useState } from "react";

const SearchResults = ({ results }: any) => {
  const [resultats, setResultats] = useState();
  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResultats(JSON.parse(storedResults));
    }
  }, []);
  return (
    <div>
      <h2>Résultats de la recherche :</h2>
      <ul>
        {results.map((result: any) => (
          <li key={result._id}>
            {result.title} / Type : {result.type} / Score énergétique:
            {result.scoreEnergy}
          </li>
        ))}
      </ul>
    </div>
  );
};

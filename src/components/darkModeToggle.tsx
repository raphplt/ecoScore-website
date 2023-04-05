// components/DarkModeToggle.js
import { useEffect, useState } from "react";
// import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Récupérer la préférence de l'utilisateur pour le mode sombre dans le localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedDarkMode === "true");
  }, []);

  const handleToggle = () => {
    // Activer/désactiver le mode sombre
    const newDarkMode: any = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Stocker la préférence de l'utilisateur pour le mode sombre dans le localStorage
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <button
      className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={handleToggle}
    >
      {isDarkMode ? <p>Dark mode</p> : <p>Light mode</p>}
    </button>
  );
};

export default DarkModeToggle;

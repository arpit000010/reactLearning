import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <div
      className={`
          min-h-screen flex flex-col items-center justify-center ${
            theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
          }
        `}
    >
      <h1 className="text-3xl font-bold mb-4">Theme Toggle App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;

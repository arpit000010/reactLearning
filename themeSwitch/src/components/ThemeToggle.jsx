import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;

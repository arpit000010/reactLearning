import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";
import ThemeToggle from "./ThemeToggle.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex justify-between">
        <ThemeToggle />
        <Login />
      </div>
      <Profile />
    </div>
  );
}

export default Navbar;

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <button
      onClick={() => setUser("Arpit")}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Login
    </button>
  );
}
export default Login;

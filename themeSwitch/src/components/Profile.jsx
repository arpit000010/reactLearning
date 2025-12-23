import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="mt-4">{user ? `Welcome, ${user}` : "Not logged in"}</div>
  );
}

export default Profile;

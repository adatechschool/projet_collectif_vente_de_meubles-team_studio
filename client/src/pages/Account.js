import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post("http://localhost:9000/logout");
    setRedirect("/login");
    setUser(false);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <h5>account page</h5>
      <div>
        <button
          className="border w-full my-8 py-2 bg-[#151515] text-white font-medium border-none hover:bg-[#353535]"
          type="submit"
          onClick={logout}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

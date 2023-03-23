import { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { Navigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:9000/profile", { withCredentials: true })
        .then((result) => {
          console.log([result.data]);
          setUser([result.data]);
          setReady(true);
        });
      console.log(user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

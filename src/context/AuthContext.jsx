import { createContext, useState, useContext, useEffect } from "react";
import auth from "../firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const value = {
    user,
  };

  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => {
      unSubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

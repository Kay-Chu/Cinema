import { createContext, useState } from "react";

const AuthContext = createContext({
  auth: {
    isLoggedIn: false,
    username: "",
    password: ""
  },
  setAuth: () => {}
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLoggedIn: false, username: "", password: "" });

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
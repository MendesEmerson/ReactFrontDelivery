import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { AuthContextData } from "../interfaces/context/authContext";

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? `bearer ${storedToken}` : null;
  });

  const [accountType, setAccountType] = useState<string | null>(() => {
    const storedAccountType = localStorage.getItem("accountType")
    return storedAccountType ? storedAccountType : null
  })

  const [username, setUsername] = useState<string | null>(() => {
    const storedUsername = localStorage.getItem("username")
    return storedUsername ? storedUsername : null
  })

  const login = (newToken: string, accountType: string, username: string) => {
    setToken(`bearer ${newToken}`);
    setAccountType(accountType)
    setUsername(username)
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setAccountType(null)
    localStorage.removeItem("accountType")
    setUsername(null)
    localStorage.removeItem("username")
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    if (token && accountType && username) {
      localStorage.setItem("token", token.replace("bearer ", ""));
      localStorage.setItem("accountType", accountType)
      localStorage.setItem("username", username)
    }
  }, [accountType, token, username]);

  const authContextValue: AuthContextData = {
    token,
    isLoggedIn,
    login,
    logout,
    accountType,
    username
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}
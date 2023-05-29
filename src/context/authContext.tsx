import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface AuthContextData {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? `bearer ${storedToken}` : null;
  });

  const login = (newToken: string) => {
    setToken(`bearer ${newToken}`);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token.replace("bearer ", ""));
    }
  }, [token]);

  const authContextValue: AuthContextData = {
    token,
    isLoggedIn,
    login,
    logout,
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
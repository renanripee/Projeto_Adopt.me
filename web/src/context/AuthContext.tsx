// AuthContext.tsx
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  token: string | null;
  setAuthToken: (newToken: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const setAuthToken = (newToken: string | null) => {
    setToken(newToken);
  };

  useEffect(() => {
    localStorage.setItem("token", token || "");
  }, [token]);

  const contextValue: AuthContextProps = {
    token,
    setAuthToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

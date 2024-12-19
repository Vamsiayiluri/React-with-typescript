import React, { createContext, useState, ReactNode } from "react";
import { AuthContextType } from "../types/authContextType";

const AuthContext = createContext<AuthContextType | null>(
  {} as AuthContextType
);
type ParentProps = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: ParentProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

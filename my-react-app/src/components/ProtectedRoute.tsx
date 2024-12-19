import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

type ParentProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ParentProps) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login"></Navigate>;
};

export default ProtectedRoute;

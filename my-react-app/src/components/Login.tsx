import { useAuth } from "../customHooks/useAuth";

export const Login = () => {
  const { login } = useAuth();
  return <button onClick={() => login("JohnDoe")}>Login</button>;
};

import { useNavigate } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login("vamsi");
    navigate("/dashboard");
  };

  return (
    <div>
      <h3>Login Page</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

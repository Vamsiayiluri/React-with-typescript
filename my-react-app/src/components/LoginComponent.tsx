import { AuthProps } from "../types/AuthProps";

export const LoginComponent: React.FC<AuthProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", margin: "10px" }}>
      Login
    </button>
  );
};

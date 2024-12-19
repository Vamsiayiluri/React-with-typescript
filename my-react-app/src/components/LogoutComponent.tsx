import { AuthProps } from "../types/AuthProps";

export const LogoutComponent = ({ onClick }: AuthProps) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", margin: "10px" }}>
      Logout
    </button>
  );
};

import { useAuth } from "../customHooks/useAuth";

export const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>{user ? `Welcome, ${user}!` : "You are not logged in."}</h1>
    </div>
  );
};

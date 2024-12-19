import { useAuth } from "../customHooks/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <span>Hloo {user},This is a Dashboard page </span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

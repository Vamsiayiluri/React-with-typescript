import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieExample = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const existingUser = Cookies.get("user");
    if (existingUser) {
      setUser(existingUser);
    }
  }, []);

  const handleLogin = () => {
    Cookies.set("user", "Vamsi", {
      expires: 7,
      path: "",
    });
    setUser("Vamsi");
  };

  const handleLogout = () => {
    Cookies.remove("user");
    setUser("");
  };

  return (
    <div>
      <h3>React Cookies Example</h3>
      <p>User: {user ? user : "Not logged in"}</p>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default CookieExample;

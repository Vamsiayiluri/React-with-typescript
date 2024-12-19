import { useState } from "react";

type authUser = {
  name: string;
  age: number;
};

export const UserState = () => {
  const [user, setUser] = useState<authUser>({
    name: "John Doe",
    age: 25,
  });

  const updateName = () => setUser({ ...user, name: "Jane Doe" });
  const increaseAge = () => setUser({ ...user, age: user.age + 1 });

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <button onClick={updateName}>Update Name</button>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

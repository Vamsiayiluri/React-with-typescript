import { Dropdown } from "./Dropdown";

type User = { id: number; name: string };

export const User = () => {
  const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return (
    <>
      <Dropdown<User>
        options={users}
        onSelect={(user) => console.log(user.name)}
        renderOption={(user) => user.name}
      />
      ;
    </>
  );
};

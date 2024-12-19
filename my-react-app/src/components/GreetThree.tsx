import React from "react";

type Person = {
  name: string;
  message: string;
  seat: number;
};

type GreetProps = {
  person: Person;
};

export const GreetThree: React.FC<GreetProps> = ({ person }) => {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.seat}!
      </h1>
    </div>
  );
};

export default GreetThree;

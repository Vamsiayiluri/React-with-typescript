type GreetProps = {
  person: {
    name: string;
    message?: string;
    seat: number;
  };
};
function Greet({ person }: GreetProps) {
  const { message = "hello" } = person;
  return (
    <div>
      <h1>
        {message} {person.name} {person.seat}!
      </h1>
    </div>
  );
}

export default Greet;

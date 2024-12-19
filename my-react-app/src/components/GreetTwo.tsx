type GreetProps = {
  person: {
    name: string;
    message: string;
    seat: number;
  };
};

export const GreetTwo = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.person.message} {props.person.name} {props.person.seat}!
      </h1>
    </div>
  );
};

export default GreetTwo;

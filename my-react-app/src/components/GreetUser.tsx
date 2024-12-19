interface Person {
  name: string;
  message: string;
  seat: number;
}
function GreetUser(props: Person) {
  return (
    <div>
      <h1>
        {props.seat} {props.message} {props.name}
      </h1>
    </div>
  );
}

export default GreetUser;

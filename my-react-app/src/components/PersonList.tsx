type personListProps = {
  personList: {
    name: string;
    message?: string;
    seat: number;
  }[];
};

export const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.personList.map((person) => {
        const { message = "hello" } = person;
        return (
          <h1 key={person.seat}>
            {message} {person.name} {person.seat}
          </h1>
        );
      })}
    </div>
  );
};

import { Button } from "./Button";
import { Input } from "./Input";
import { StyleProps } from "./StyleProps";
export const EventProps = () => {
  return (
    <div>
      <Button
        handleClick={(event) => console.log("button clicked", event)}
      ></Button>
      <Input
        value=""
        handleChange={(event) => console.log(event, "checking")}
      ></Input>

      <StyleProps
        styles={{
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          margin: "10px",
        }}
      ></StyleProps>
    </div>
  );
};

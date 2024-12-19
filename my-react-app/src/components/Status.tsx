type statusProps = {
  status: "success" | "error" | "loading";
};
export const Status = ({ status }: statusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading message";
  } else if (status === "success") {
    message = "success message";
  } else if (status === "error") {
    message = "error message";
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

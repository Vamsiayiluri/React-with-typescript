import { AuthProps } from "../types/AuthProps";

type ContainerProps = {
  isAuthenticated: boolean;
  LoginComponent: React.ComponentType<AuthProps>;
  LogoutComponent: React.ComponentType<AuthProps>;
  toggleAuth: () => void;
};

export const Container = ({
  isAuthenticated,
  LoginComponent,
  LogoutComponent,
  toggleAuth,
}: ContainerProps) => {
  return (
    <div>
      <h1>{isAuthenticated ? "Welcome Back!" : "Please Log In"}</h1>
      {isAuthenticated ? (
        <LogoutComponent onClick={toggleAuth} />
      ) : (
        <LoginComponent onClick={toggleAuth} />
      )}
    </div>
  );
};

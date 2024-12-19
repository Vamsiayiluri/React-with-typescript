import { useState } from "react";
import { ChildrenProp } from "../ChildrenProp";
import { AuthProvider } from "../context/AuthContext";
import ClassComponent from "./ClassComponent";
import { Container } from "./Container";
import { EventProps } from "./EventProps";
import Greet from "./Greet";
import GreetingClass from "./GreetingClass";
import GreetThree from "./GreetThree";
import GreetTwo from "./GreetTwo";
import { Login } from "./Login";
import { LoginComponent } from "./LoginComponent";
import { Logout } from "./Logout";
import { LogoutComponent } from "./LogoutComponent";
import { PersonList } from "./PersonList";
import PreviousStateExample from "./PreviousStateExample";
import { Product } from "./Product";
import { Status } from "./Status";
import { TodoSample } from "./TodoSample";
import { User } from "./User";
import { UseReducerHook } from "./useReducerHook";
import { UserInfo } from "./UserInfo";
import { UserState } from "./UserState";

export const ReactWithTypescript = () => {
  type Person = {
    name: string;
    message: string;
    seat: number;
  };
  let person: Person = {
    name: "vamsi",
    message: "hello",
    seat: 12,
  };
  const personList = [
    {
      name: "vamsi",
      message: "hello",
      seat: 12,
    },
    {
      name: "krishna",
      seat: 13,
    },
    {
      name: "vamsi",
      message: "bye",
      seat: 14,
    },
  ];
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div>
      <Greet person={person}></Greet>
      <GreetTwo person={person}></GreetTwo>
      <GreetThree person={person}></GreetThree>
      <PersonList personList={personList}></PersonList>
      <Status status="loading"></Status>
      <ChildrenProp>{"Hello world"}</ChildrenProp>
      <EventProps></EventProps>

      <UserState></UserState>
      <TodoSample></TodoSample>
      <UseReducerHook></UseReducerHook>

      <AuthProvider>
        <UserInfo />
        <Login />
        <Logout />
      </AuthProvider>

      <PreviousStateExample></PreviousStateExample>

      {/* class */}
      <ClassComponent></ClassComponent>
      <GreetingClass name="Vamsi"></GreetingClass>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Container
          isAuthenticated={isAuthenticated}
          LoginComponent={LoginComponent}
          LogoutComponent={LogoutComponent}
          toggleAuth={toggleAuth}
        />
      </div>

      <>
        <User></User>
        <Product></Product>
      </>
    </div>
  );
};

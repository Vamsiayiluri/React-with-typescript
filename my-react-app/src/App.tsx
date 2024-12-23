import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonCounter from "./components/ButtonCounter";
import ClassButtonCounter from "./components/ClassButtonCounter";
import ClassHoverCounter from "./components/ClassHoverCounter";
import CustomHooksCounter from "./components/CustomHooksCounter";
import DomManipulationUseRefs from "./components/DomManipulationUsingRefs";
import EnhancedClickCounter from "./components/EnhancedClickCounter";
import EnhancedHoverCounter from "./components/EnhancedHoverCounter";
import HoverCounter from "./components/HoverCounter";
import SearchUser from "./components/SearchUser";
import { ReactWithTypescript } from "./components/ReactWithTypescript";
import UseRefHook from "./components/UseRefHook";
import { AuthProvider } from "./context/AuthContext";

import ParentComponentSample from "./components/ParentComponentSample";
import { ControlledComponent } from "./components/ControlledComponent";
import CookieExample from "./components/CookieExample";
import { LocalStorage } from "./components/LocalStorage";
import { SessionStorageSample } from "./components/SessionStorageSample";
import { TodoExample } from "./components/TodoExample";
import { UncontrolledComponent } from "./components/UnControlledComponent";
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/iceCream/IceCreamView";
import { UserView } from "./features/user/UserView";
import React, { Suspense, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const FragmentsSample = React.lazy(
  () => import("./components/FragmentsSample")
);
function App() {
  const [show, setShow] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const loadImage = async () => {
    const imageModule = await import("./assets/react.svg");
    setImageSrc(imageModule.default);
  };

  const loadComponent = async () => {
    const module = await import("./components/DomManipulationUsingRefs");
    setComponent(() => module.default);
  };
  return (
    <div>
      <ReactWithTypescript></ReactWithTypescript>
      {/* Dom Manipulation using UseRefs */}
      <UseRefHook></UseRefHook>
      <DomManipulationUseRefs></DomManipulationUseRefs>
      {/* Render Props for class and functional components */}
      <>
        <h3>Using Render Props for Counter in functional component</h3>
        <ButtonCounter></ButtonCounter>
        <HoverCounter></HoverCounter>
      </>

      <>
        <h3>Using Render Props for Counter in class component</h3>
        <ClassButtonCounter></ClassButtonCounter>
        <ClassHoverCounter></ClassHoverCounter>
      </>
      {/* Higher Order Components */}
      <>
        <h3>Using HOC for Counter in Class and functional component</h3>
        <EnhancedClickCounter></EnhancedClickCounter>
        <EnhancedHoverCounter></EnhancedHoverCounter>
      </>
      {/* Custom Hooks */}
      <>
        <h3>Custom Hooks Sample</h3>
        <CustomHooksCounter></CustomHooksCounter>
        <SearchUser></SearchUser>
      </>
      {/* FragmentsSample */}
      <>
        <FragmentsSample></FragmentsSample>
      </>

      {/*Pure Component and Memo samples*/}
      <ParentComponentSample></ParentComponentSample>
      <>
        {/* Controlled and uncontolledComponents*/}
        <ControlledComponent></ControlledComponent>
        <UncontrolledComponent></UncontrolledComponent>
      </>
      {/* Cookies,LocalStorage,SessionStorage */}
      <>
        <CookieExample></CookieExample>
        <LocalStorage></LocalStorage>
        <TodoExample></TodoExample>
        <SessionStorageSample></SessionStorageSample>
        <CakeView></CakeView>
        <IceCreamView></IceCreamView>
        <UserView></UserView>
      </>
      {/* Protected Routes, Code splitting, lazy loading */}
      <>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard></Dashboard>
                    </ProtectedRoute>
                  }
                ></Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </>
      <>
        <button onClick={() => setShow(!show)}>Toggle Heavy Component</button>
        {show && (
          <Suspense fallback={<div>Loading component...</div>}>
            <FragmentsSample />
          </Suspense>
        )}
      </>
      <>
        <h3>Dynamic Import Example</h3>
        <button onClick={loadComponent}>Load Heavy Component</button>
        {Component && <Component />}
      </>
      <>
        <h3>Dynamic Import for Images</h3>
        <button onClick={loadImage}>Load Image</button>
        {imageSrc && <img src={imageSrc} alt="Dynamically loaded" />}
      </>
    </div>
  );
}

export default App;

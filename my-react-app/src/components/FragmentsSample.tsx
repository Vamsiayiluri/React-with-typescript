import { Fragment, useState } from "react";
import { users } from "../data/users";

function FragmentsSample() {
  const [isLoggedIn] = useState<boolean>(true);
  return (
    <>
      <div>
        <h1>Hello</h1>
        <p>This is a paragraph.</p>
      </div>
      <div>
        {users.map((item, index) => (
          <Fragment key={index}>
            <h3>{item.id}</h3>
            <p>{item.name}</p>
          </Fragment>
        ))}
      </div>
      <div>
        {isLoggedIn ? (
          <>
            <h1>Welcome back!</h1>
            <button>Logout</button>
          </>
        ) : (
          <>
            <h1>Please log in.</h1>
            <button>Login</button>
          </>
        )}
      </div>
    </>
  );
}
export default FragmentsSample;

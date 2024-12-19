import { useState } from "react";
import NormalComponentSample from "./NormalComponentSample";
import PureComponentSample from "./PureComponentSample";
import { MemoSample } from "./MemoSample";

const ParentComponentSample = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("Hello");

  return (
    <div>
      <h2>Parent Component</h2>
      <label>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </label>
      <br />
      <label>
        Address:{" "}
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
      </label>

      <h3>Normal Component</h3>
      <NormalComponentSample name={name} />

      <h3>Using Pure Component</h3>
      <PureComponentSample name={name} />

      <h3>Using Memo</h3>
      <h3>{greeting}</h3>
      <MemoSample name={name} value={greeting} onChange={setGreeting} />
    </div>
  );
};

export default ParentComponentSample;

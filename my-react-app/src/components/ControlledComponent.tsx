import React, { useState } from "react";

export const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobDescription, setDobDescription] = useState("");
  const [location, setDobLocation] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleJobDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDobDescription(e.target.value);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDobLocation(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Value:", name, email, jobDescription, location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Job description:
        <textarea
          value={jobDescription}
          onChange={handleJobDescriptionChange}
        />
      </label>
      <select value={location} onChange={handleLocationChange}>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkota">Kolkota</option>
        <option value="Chennai">Chennai</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

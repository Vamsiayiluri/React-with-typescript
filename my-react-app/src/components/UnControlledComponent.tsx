import React, { useRef } from "react";

export const UncontrolledComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const jobDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const resumeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Submitted Value:",
      nameRef.current?.value,
      nameRef.current?.value,
      jobDescriptionRef.current?.value
    );
    if (resumeRef.current?.files) console.log(resumeRef.current?.files[0].name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <label>
        Email:
        <input type="text" ref={emailRef} />
      </label>
      <label>
        Job description:
        <textarea ref={jobDescriptionRef} />
      </label>
      <label>
        Upload file:
        <input type="file" ref={resumeRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  jobDescription: string;
  location: string;
}

export const SessionStorageSample = () => {
  const getFormData = () => {
    const savedData = sessionStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : { name: "", email: "", jobDescription: "", location: "Hyderabad" };
  };
  const [formData, setFormData] = useState<FormData>(getFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      sessionStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Value:", formData);
    sessionStorage.removeItem("formData");
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Job description:
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkota">Kolkota</option>
          <option value="Chennai">Chennai</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

import React from "react";
import { useState } from "react";

export default function Form() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, undefined, 2));
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <label>Email</label>
        <input
          type="email"s
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br />
        <button type="submit">Sumbit</button>
      </form>
      <p>{JSON.stringify(formData)}</p>
    </>
  );
}

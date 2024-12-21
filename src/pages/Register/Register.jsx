import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SHEETDB_URL } from "../../config";
import "./Register.css";

const Register = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Unnamed Event";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              eventName,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: formData.message || "No message provided",
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to submit registration.");

      setSuccess("Registration successful! 🎉");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      {/* Background Shapes */}
      <div className="background-shape circle1"></div>
      <div className="background-shape circle2"></div>
      <div className="background-shape circle3"></div>

      {/* Form Content */}
      <h1 className="register-title">Register for {eventName}</h1>
      {error && <p className="register-error">{error}</p>}
      {success && <p className="register-success">{success}</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          className="register-input"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />

        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

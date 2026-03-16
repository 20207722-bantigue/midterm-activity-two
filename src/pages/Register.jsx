import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    course: ""
  });

  const validate = (field, value) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) error = "Name is required";
    }

    if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Email format is invalid";
    }

    if (field === "course") {
      if (!value.trim()) error = "Course is required";
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.course &&
      !errors.name &&
      !errors.email &&
      !errors.course
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", course: "" });
    setErrors({ name: "", email: "", course: "" });
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.name && <span style={{ color: "red", fontSize: "14px" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.email && <span style={{ color: "red", fontSize: "14px" }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.course && <span style={{ color: "red", fontSize: "14px" }}>{errors.course}</span>}
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: isFormValid() ? "#007bff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: isFormValid() ? "pointer" : "not-allowed",
            fontWeight: "bold"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
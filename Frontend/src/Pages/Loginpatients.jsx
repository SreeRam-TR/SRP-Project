import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPatients = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, sum: num1 + num2 };
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Enter a valid email address.");
      return false;
    }
    if (parseInt(formData.captchaInput) !== captcha.sum) {
      setError("Captcha does not match.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert("Login successful!");
        navigate("/patient/dashboard");
      } else {
        // Login failed
        setError(data.message || "Login failed. Please try again.");
        setCaptcha(generateCaptcha());
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div className="container">
      <h2>Patient Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <label>
        Captcha: {captcha.num1} + {captcha.num2} = ?
      </label>
      <input
        type="number"
        name="captchaInput"
        value={formData.captchaInput}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
        Regenerate Captcha
      </button>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/Patients")}>Register</button>
    </div>
  );
};

export default LoginPatients;

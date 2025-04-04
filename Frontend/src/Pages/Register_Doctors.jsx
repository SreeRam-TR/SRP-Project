import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    specialization: "",
    experience: "",
    hospital_type: "",
    password: "",
    confirmPassword: "",
    captchaInput: "",
  });

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, sum: num1 + num2 };
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setShowConfirmPassword(value.length > 0);
    }
  };

  const validateForm = () => {
    const {
      fullName,
      email,
      phone,
      dob,
      specialization,
      experience,
      hospital_type,
      password,
      confirmPassword,
      captchaInput,
    } = formData;

    if (!fullName || !email || !phone || !dob || !specialization || !experience || !hospital_type || !password) {
      setError("Please fill in all required fields.");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    if (showConfirmPassword && password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    if (parseInt(captchaInput) !== captcha.sum) {
      setError("Captcha does not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/register/doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Doctor registered successfully!");
        navigate("/loginD");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Doctor Registration</h2>

        {error && <p style={styles.error}>{error}</p>}

        <label style={styles.label}>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Specialization:</label>
        <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Years of Experience:</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Hospital Type:</label>
        <input type="text" name="hospital_type" value={formData.hospital_type} onChange={handleInputChange} required style={styles.input} />

        <label style={styles.label}>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required style={styles.input} />

        {showConfirmPassword && (
          <>
            <label style={styles.label}>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required style={styles.input} />
          </>
        )}

        <label style={styles.label}>Captcha: {captcha.num1} + {captcha.num2} = ?</label>
        <input type="number" name="captchaInput" value={formData.captchaInput} onChange={handleInputChange} required style={styles.input} />

        <button type="button" onClick={() => setCaptcha(generateCaptcha())} style={styles.buttonSecondary}>Regenerate Captcha</button>

        <button type="submit" style={styles.buttonPrimary}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "10px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonPrimary: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  buttonSecondary: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default Doctors;

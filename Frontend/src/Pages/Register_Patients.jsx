import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientRegistration = () => {
  const navigate = useNavigate();
  const countries = ["India", "Iran", "Indonesia", "Iraq", "Ireland", "Italy"];
  const states = {
    India: ["Tamil Nadu", "Telangana", "Tripura"],
    Iran: ["Tehran", "Tabriz"],
    Indonesia: ["Jakarta", "Bali"],
    Iraq: ["Baghdad", "Basra"],
    Ireland: ["Dublin", "Cork"],
    Italy: ["Rome", "Milan"],
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "", // Single date string (YYYY-MM-DD)
    email: "",
    phone: "",
    countryCode: "+91",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
    heightUnit: "cm",
    weightUnit: "kg",
    address: "",
    country: "",
    state: "",
    password: "",
    captchaInput: "",
  });

  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [suggestedStates, setSuggestedStates] = useState([]);
  const [savedUsers, setSavedUsers] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    const input = e.target.value;
    setFormData({ ...formData, country: input, state: "" });

    if (input.length > 0) {
      setSuggestedCountries(
        countries.filter((c) =>
          c.toLowerCase().startsWith(input.toLowerCase())
        )
      );
    } else {
      setSuggestedCountries([]);
    }
  };

  const handleStateChange = (e) => {
    const input = e.target.value;
    setFormData({ ...formData, state: input });

    if (formData.country && states[formData.country]) {
      setSuggestedStates(
        states[formData.country].filter((s) =>
          s.toLowerCase().startsWith(input.toLowerCase())
        )
      );
    } else {
      setSuggestedStates([]);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const dobFormatted = formData.dob; // Already in YYYY-MM-DD
    const patientData = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      dob: dobFormatted,
      blood_type: formData.bloodGroup,
      address: formData.address,
      password: formData.password,
    };
    try {
      const response = await fetch("http://localhost:5000/api/auth/register/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
        return;
      }
  
      const result = await response.json();
      console.log("Success:", result);
      alert("Patient registered successfully!");
  
      navigate("/loginP");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Patient Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Full Name:</label>
        <input type="text" name="fullName" required onChange={handleInputChange} />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          required
          max={new Date().toISOString().split("T")[0]} // Prevent future date
        />

        <label>Email Address:</label>
        <input type="email" name="email" required onChange={handleInputChange} />

        <label>Phone Number:</label>
        <div style={styles.row}>
          <select name="countryCode" onChange={handleInputChange}>
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
            <option>+86</option>
          </select>
          <input type="text" name="phone" required onChange={handleInputChange} />
        </div>

        <label>Blood Group:</label>
        <select name="bloodGroup" onChange={handleInputChange}>
          <option value="">Select</option>
          {bloodGroups.map((bg) => (
            <option key={bg}>{bg}</option>
          ))}
        </select>

        <label>Address:</label>
        <textarea name="address" onChange={handleInputChange}></textarea>

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleCountryChange}
        />
        {suggestedCountries.length > 0 && (
          <ul style={styles.suggestions}>
            {suggestedCountries.map((c) => (
              <li key={c} onClick={() => setFormData({ ...formData, country: c })}>
                {c}
              </li>
            ))}
          </ul>
        )}

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleStateChange}
        />
        {suggestedStates.length > 0 && (
          <ul style={styles.suggestions}>
            {suggestedStates.map((s) => (
              <li key={s} onClick={() => setFormData({ ...formData, state: s })}>
                {s}
              </li>
            ))}
          </ul>
        )}

        <label>Password:</label>
        <input type="password" name="password" required onChange={handleInputChange} />

        <label>Captcha: 10 + 1 = ?</label>
        <input
          type="text"
          name="captchaInput"
          required
          onChange={handleInputChange}
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "500px", margin: "auto", padding: "20px" },
  title: { textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  row: { display: "flex", gap: "10px" },
  suggestions: {
    listStyle: "none",
    padding: 0,
    background: "#ddd",
    cursor: "pointer",
    margin: 0,
  },
  button: {
    marginTop: "10px",
    background: "blue",
    color: "white",
    padding: "10px",
    border: "none",
  },
};

export default PatientRegistration;

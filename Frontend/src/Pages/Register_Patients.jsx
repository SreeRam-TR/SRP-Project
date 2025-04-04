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
    firstName: "",
    lastName: "",
    dob: { day: "", month: "", year: "" },
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
        countries.filter((c) => c.toLowerCase().startsWith(input.toLowerCase()))
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedUsers([...savedUsers, { email: formData.email, password: formData.password }]);
    console.log("Stored Users:", savedUsers);
    alert("Form submitted successfully!");
    setTimeout(() => {
      navigate("/loginP");
  }, 500);

  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Patient Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>First Name:</label>
        <input type="text" name="firstName" required onChange={handleInputChange} />

        <label>Last Name:</label>
        <input type="text" name="lastName" required onChange={handleInputChange} />

        <label>Date of Birth:</label>
        <div style={styles.row}>
          <select name="dobDay" onChange={handleInputChange}>
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select name="dobMonth" onChange={handleInputChange}>
            <option value="">Month</option>
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
              (m) => (
                <option key={m}>{m}</option>
              )
            )}
          </select>
          <select name="dobYear" onChange={handleInputChange}>
            <option value="">Year</option>
            {[...Array(100)].map((_, i) => (
              <option key={2024 - i}>{2024 - i}</option>
            ))}
          </select>
        </div>

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

        <label>Gender:</label>
        <div>
          <input type="radio" name="gender" value="Male" onChange={handleInputChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={handleInputChange} /> Female
        </div>

        <label>Blood Group:</label>
        <select name="bloodGroup" onChange={handleInputChange}>
          <option value="">Select</option>
          {bloodGroups.map((bg) => (
            <option key={bg}>{bg}</option>
          ))}
        </select>

        <label>Height & Weight:</label>
        <div style={styles.row}>
          <input type="number" name="height" placeholder="Height" onChange={handleInputChange} />
          <select name="heightUnit" onChange={handleInputChange}>
            <option>cm</option>
            <option>inches</option>
          </select>
          <input type="number" name="weight" placeholder="Weight" onChange={handleInputChange} />
          <select name="weightUnit" onChange={handleInputChange}>
            <option>kg</option>
            <option>pounds</option>
          </select>
        </div>

        <label>Address:</label>
        <textarea name="address" onChange={handleInputChange}></textarea>

        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleCountryChange} />
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
        <input type="text" name="state" value={formData.state} onChange={handleStateChange} />
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
        <input type="text" name="captchaInput" required onChange={handleInputChange} />

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
  suggestions: { listStyle: "none", padding: 0, background: "#ddd", cursor: "pointer" },
  button: { marginTop: "10px", background: "blue", color: "white", padding: "10px", border: "none" },
};

export default PatientRegistration;
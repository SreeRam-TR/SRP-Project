const pool = require("../db");

// Register Patient
const registerPatient = async (req, res) => {
  const { full_name, email, phone, dob, blood_type, address, password } = req.body;

  try {
    const profileRes = await pool.query(
      `INSERT INTO patients_profile (full_name, email, phone, dob, blood_type, address)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING patient_id`,
      [full_name, email, phone, dob, blood_type, address]
    );

    const patient_id = profileRes.rows[0].patient_id;

    await pool.query(
      `INSERT INTO patient_login (patient_id, email, password) VALUES ($1, $2, $3)`,
      [patient_id, email, password]
    );

    res.status(201).json({ message: "Patient registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
};

// Login Patient
const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM patient_login WHERE email = $1", [email]);

    if (user.rows.length === 0)
      return res.status(404).json({ error: "Patient not found" });

    if (user.rows[0].password !== password)
      return res.status(401).json({ error: "Incorrect password" });

    await pool.query(
      "UPDATE patient_login SET last_login = NOW() WHERE patient_id = $1",
      [user.rows[0].patient_id]
    );

    res.json({ message: "Login successful", patient_id: user.rows[0].patient_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};

// Register Doctor
const registerDoctor = async (req, res) => {
  const {
    fullName, email, phone, dob, specialization,
    experience, hospital_type, password
  } = req.body;

  try {
    const profileRes = await pool.query(
      `INSERT INTO doctors_profile (full_name, email, phone, dob, specialty, experience, hospital_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING doctor_id`,
      [fullName, email, phone, dob, specialization, experience, hospital_type]
    );

    const doctor_id = profileRes.rows[0].doctor_id;

    await pool.query(
      `INSERT INTO doctor_login (doctor_id, email, password) VALUES ($1, $2, $3)`,
      [doctor_id, email, password]
    );

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Doctor registration failed" });
  }
};

// Login Doctor
const loginDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM doctor_login WHERE email = $1", [email]);

    if (user.rows.length === 0)
      return res.status(404).json({ error: "Doctor not found" });

    if (user.rows[0].password !== password)
      return res.status(401).json({ error: "Incorrect password" });

    await pool.query(
      "UPDATE doctor_login SET last_login = NOW() WHERE doctor_id = $1",
      [user.rows[0].doctor_id]
    );

    res.json({ message: "Login successful", doctor_id: user.rows[0].doctor_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor
};

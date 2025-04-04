const express = require("express");
const router = express.Router();
const {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
} = require("../models/authModel");

// Patient
router.post("/register/patient", registerPatient);
router.post("/login/patient", loginPatient);

// Doctor
router.post("/register/doctor", registerDoctor);
router.post("/login/doctor", loginDoctor);

module.exports = router;

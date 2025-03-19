import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Login_Patients from "./Pages/Login_Patients";
import Login_Doctors from "./Pages/Login_Doctors";
import Patients from "./Pages/Patients";
import Doctors from "./Pages/Doctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-patients" element={<Login_Patients />} />
        <Route path="/login-doctors" element={<Login_Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </Router>
  );
}

export default App;

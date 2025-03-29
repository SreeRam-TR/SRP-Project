import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Login Pages
import LoadingScreen from "./Pages/LoadingScreen"; // First screen
import Login from "./Pages/Login";
import Patients from "./Pages/Register_Patients";
import Doctors from "./Pages/Register_Doctors";
import LoginDoctors from "./Pages/LoginDoctors"; 
import LoginPatients from "./Pages/Loginpatients";

// Import Doctor Pages
import DoctorHome from "./Pages/Doctor_DoctorHome";
import AcceptedCases from "./Pages/Doctor_AcceptedCases";
import CompletedCases from "./Pages/Doctor_CompletedCases";
import PatientDetail from "./Pages/Doctor_PatientDetail";
import './styles/Doctor_Styles.css'; 

// Import Patient Pages
import PatientHome from "./Pages/Patient_PatientHome";
import PatientDashboard from "./Pages/Patient_Dashboard";
import PatientNavbar from "./components/Patient_Navbar";
import PatientSidebar from "./components/Patient_Sidebar";
import PatientSettings from "./Pages/Patient_Settings";
import PatientDoctorProfile from "./Pages/Patient_DoctorProfile";
import PatientChatPage from "./Pages/Patient_ChatPage";
import PatientHistory from "./Pages/Patient_History";
import PatientResponses from "./Pages/Patient_Responses";
import PatientSendQuery from "./Pages/Patient_SendQuery";

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/loginD" element={<LoginDoctors />} />
        <Route path="/loginP" element={<LoginPatients />} />

        {/* Doctor Routes */}
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/doctor/accepted-cases" element={<AcceptedCases />} />
        <Route path="/doctor/completed-cases" element={<CompletedCases />} />
        <Route path="/doctor/patient-detail/:id" element={<PatientDetail />} />

        {/* Patient Routes */}
        {/* <Route path="/patient/home" element={<PatientHome />} />*/}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/navbar" element={<PatientNavbar />} />
        <Route path="/patient/sidebar" element={<PatientSidebar />} />
        <Route path="/patient/settings" element={<PatientSettings />} />
        <Route path="/patient/doctor-profile/:id" element={<PatientDoctorProfile />} />
        <Route path="/patient/chat" element={<PatientChatPage />} />
        <Route path="/patient/history" element={<PatientHistory />} />
        <Route path="/patient/responses" element={<PatientResponses />} />
        <Route path="/patient/send-query" element={<PatientSendQuery />} />
      </Routes>
    </Router>
  );
}

export default App;

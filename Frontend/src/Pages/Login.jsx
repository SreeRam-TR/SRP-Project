import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Medical Platform</h1>
      <p>Please log in to continue.</p>
      <button onClick={() => navigate("/login-patients")}>Patient Login</button>
      <button onClick={() => navigate("/login-doctors")}>Doctor Login</button>
    </div>
  );
}

export default Login;

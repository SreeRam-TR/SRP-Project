import React from "react";
import { useNavigate } from "react-router-dom";
import loginGif from "../assets/gifs/login_bg.gif"; // Import gif

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Left Side - GIF */}
      <div style={styles.left}>
        <img src={loginGif} alt="Login Background" style={styles.gif} />
      </div>

      {/* Right Side - Login Form */}
      <div style={styles.right}>
        <h2 style={styles.heading}>Welcome to Medical Platform</h2>

        {/* Patient Login Button */}
        <button
          onClick={() => navigate("/loginP")}
          style={{ ...styles.button, backgroundColor: "yellow", color: "black" }}
        >
          Patient Login
        </button>

        {/* Doctor Login Button */}
        <button
          onClick={() => navigate("/loginD")}
          style={{ ...styles.button, backgroundColor: "blue", color: "white" }}
        >
          Doctor Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  left: {
    flex: 1, // Takes 50% of screen
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1, // Takes 50% of screen
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
  },
  gif: {
    width: "80%", // Reduced size
    height: "80%",
    objectFit: "contain",
  },
  heading: {
    fontSize: "28px", // Bigger size
    fontWeight: "bold",
    color: "green",
    marginBottom: "20px",
  },
  button: {
    margin: "10px",
    padding: "15px 30px", // Bigger size
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;

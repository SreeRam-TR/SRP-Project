import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingGif from "../assets/gifs/loading.gif"; // Import gif1

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login"); // Redirect to Login.jsx after 5 seconds
    }, 5000);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src={loadingGif} alt="Loading..." style={styles.gif} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000", // Background color
  },
  gif: {
    width: "300px",
    height: "300px",
  },
};

export default LoadingScreen;

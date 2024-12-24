import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "sonner";

const Login = ({ onClose, onOpenSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
  
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
  
      if (response.status === 200) {
        login(response.data.token);
        onClose();
        toast.success("Login successful");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Login failed.");
    }
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {/* Title */}
        <h3 className="title">Login to Your Account</h3>

        {/* Input Fields */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button onClick={handleLogin} className="sign-in-btn">
          Sign In
        </button>

        {/* Sign-Up Link */}
        <p className="sign-up">
          Don't have an account?{" "}
          <span className="link" onClick={onOpenSignUp}>
            Sign Up
          </span>
        </p>

        {/* Privacy Message */}
        <p className="privacy-msg">
          By continuing, you accept the{" "}
          <span className="link">Terms & Conditions</span> and{" "}
          <span className="link">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;

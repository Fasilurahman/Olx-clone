import React,{useState} from 'react'
import './SignUp.css'
import axios from 'axios';
import { toast } from 'sonner';

const SignUp = ({onClose, onOpenLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    console.log('1');
    
    try {
      const response = await axios.post('http://localhost:3000/register', {
        email: email,
        password: password,
      });
      console.log('2');
      
  
      if (response.data.message === 'User registered successfully') {
        toast.success("User registered successfully");
        console.log("Closing the modal...");
        onClose(); // Close the modal after success
        onOpenLogin();
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.response.data.error||"An error occurred during registration");
      console.error('Error:', error);
    }
  };
  
  
  

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="logo-container">
          <img
            src="/icons/loginEntryPointPost.webp"
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Title */}
        <h3 className="signup-title">
          Help us become one of the safest places to buy and sell
        </h3>

        {/* Input Fields */}
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Sign Up Button */}
        <button onClick={handleClick} className="signup-button">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="login-link">
          Already have an account?{" "}
          <span className="login-text" onClick={onOpenLogin}>
            Login
          </span>
        </p>

        {/* Privacy Message */}
        <p className="privacy-message">
          All your personal details are safe with us. <br />
          If you continue, you are accepting{" "}
          <span className="privacy-policy">
            OLX Terms and Conditions and Privacy Policy
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
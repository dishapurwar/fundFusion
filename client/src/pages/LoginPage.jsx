import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../Component/Input";
import Button from "../Component/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  async function handleLoginSubmit(ev) {
    ev.preventDefault();

    // Check if email is provided
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    // Check if password is provided
    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);

      alert("Login successful.");
      setRedirect(true);
    } catch (e) {
      alert("Login failed.");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input
          type="email"
          placeholder="email id"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        {/* <div className="relative flex"> */}
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password (min length 8)"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2 cursor-pointer text-white"
        >
          <FontAwesomeIcon icon={showPassword ? FaEye : FaEyeSlash} />
        </span>

        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </InputContainer>
      <ButtonContainer>
        <Button
          type="submit"
          onClick={handleLoginSubmit}
          style={{ zIndex: 1 }} // Ensure the button text is above other elements
        >
          Login
        </Button>
      </ButtonContainer>

      <div className="text-center py-2">
        <p style={{ color: "yellow" }}>Don't have an account?</p>
      </div>
      <div>
        <Link className="underline text-white" to={"/register"}>
          Register here
        </Link>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-top: 3rem;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  input {
    width: 80%; /* Adjusted width of the input field */
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoginPage;

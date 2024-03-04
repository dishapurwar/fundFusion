// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import Tilt from 'react-parallax-tilt';

// import '../App.css'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const { setUser } = useContext(UserContext);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   function validateEmail(email) {
//     const emailRegex = /^\d{6}$|^\d{10}$|^\d{6}@mail\.jiit\.ac\.in$|^\d{10}@mail\.jiit\.ac\.in$/;
//     return emailRegex.test(email);
//   }

//   function validatePassword(password) {
//     return password.length >= 8;
//   }

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();

//     // Check if email is provided
//     if (!email.trim()) {
//       setEmailError('Email is required');
//       return;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format');
//       return;
//     } else {
//       setEmailError('');
//     }

//     // Check if password is provided
//     if (!password.trim()) {
//       setPasswordError('Password is required');
//       return;
//     } else if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     } else {
//       setPasswordError('');
//     }

//     try {
//       const { data } = await axios.post('/login', { email, password });
//       setUser(data);

//       alert('Login successful.');
//       setRedirect(true);
//     } catch (e) {
//       alert('Login failed.');
//     }
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />;
//   }

//   const loginwithgoogle = ()=>{
//     window.open("http://localhost:4000/auth/google/callback","_self")
// }

//   return (
//     <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
//     <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
//     <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
//     <Tilt>
//     <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
//       <div className="mt-4 grow flex items-center justify-around">
//         <div className="mb-48">
//           <h1 className="text-2xl text-center mb-4">Login</h1>
//           <form className="max-w-md mx-auto h-full flex flex-col justify-evenly items-center" onSubmit={handleLoginSubmit}>
//             <input
//               type="email"
//               placeholder="College email id"
//               className='input-text'
//               value={email}
//               onChange={(ev) => setEmail(ev.target.value)}
//             />
//             {emailError && <p className="text-red-500">{emailError}</p>}
//             <div className="relative flex">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className='input-text'
//                 placeholder="password (min length 8)"
//                 value={password}
//                 onChange={(ev) => setPassword(ev.target.value)}
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-2 top-2 cursor-pointer text-white"
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//               </span>
//             </div>
//             {passwordError && <p className="text-red-500">{passwordError}</p>}
//             <button className=" cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mt-2">Login</button>

//            <div className="flex gap-2">
//            {/* <div className="text-center py-2 text-gray-500 text-sm ">
//               <Link className="underline text-white" to={"/forgot-password"}>
//                 Forgot Password?
//               </Link>
//             </div> */}
//             {/* <div className="text-center py-2 text-gray-500 text-sm">
//               <Link className="underline text-white" to={"/admin/login"}>
//                 Login Admin
//               </Link>
//             </div> */}
//             </div>

//             {/* Registration Link */}
//             <div className="text-center py-2 text-gray-500">
//               <p>Don't have an account?</p>
//               <Link className="underline text-white" to={"/register"}>
//                 Register here
//               </Link>
//             </div>
//             <div>
//             <button className='login-with-google-btn' onClick={loginwithgoogle}>
//                     Sign In With Google
//                 </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>
//     </Tilt>
//   </div>

//   );
// }

// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import Tilt from 'react-parallax-tilt';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import styled from "styled-components";
// import { FaGoogle } from "react-icons/fa";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false); // New state variable for redirect
//   const { setUser } = useContext(UserContext);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   function validateEmail(email) {
//     const emailRegex = /^\d{6}$|^\d{10}$|^\d{6}@mail\.jiit\.ac\.in$|^\d{10}@mail\.jiit\.ac\.in$/;
//     return emailRegex.test(email);
//   }

//   function validatePassword(password) {
//     return password.length >= 8;
//   }

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();

//     // Check if email is provided
//     if (!email.trim()) {
//       setEmailError('Email is required');
//       return;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format');
//       return;
//     } else {
//       setEmailError('');
//     }

//     // Check if password is provided
//     if (!password.trim()) {
//       setPasswordError('Password is required');
//       return;
//     } else if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     } else {
//       setPasswordError('');
//     }

//     try {
//       const { data } = await axios.post('/login', { email, password });
//       setUser(data);

//       alert('Login successful.');
//       setRedirect(true); // Redirect after successful login
//     } catch (e) {
//       alert('Login failed.');
//     }
//   }

//   const loginwithgoogle = () => {
//     window.open("http://localhost:4000/auth/google/callback", "_self")
//   }

//   if (redirect) {
//     return <Navigate to={"/dashboard"} />; // Redirect to dashboard page
//   }

//   return (
//     <MainContainer>
//       <WelcomeText>Welcome</WelcomeText>
//       <InputContainer>
//         <Input type="text" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
//         {emailError && <ErrorText>{emailError}</ErrorText>}
//         <Input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
//         {passwordError && <ErrorText>{passwordError}</ErrorText>}
//       </InputContainer>
//       <ButtonContainer>
//         <Button content="Sign Up" onClick={handleLoginSubmit} />
//       </ButtonContainer>
//       <LoginWith>OR LOGIN WITH</LoginWith>
//       <HorizontalRule />
//       <IconsContainer>
//         <Icon color="#DB4437" onClick={loginwithgoogle}>
//           <FontAwesomeIcon icon={faGoogle} />
//         </Icon>
//       </IconsContainer>

//     </MainContainer>
//   );
// }

// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   @media only screen and (max-width: 320px) {
//     width: 80vw;
//     height: 90vh;
//     hr {
//       margin-bottom: 0.3rem;
//     }
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 360px) {
//     width: 80vw;
//     height: 90vh;
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 411px) {
//     width: 80vw;
//     height: 90vh;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 80vw;
//     height: 80vh;
//   }
//   @media only screen and (min-width: 1024px) {
//     width: 70vw;
//     height: 50vh;
//   }
//   @media only screen and (min-width: 1280px) {
//     width: 30vw;
//     height: 80vh;
//   }
// `;

// const WelcomeText = styled.h2`
//   margin: 3rem 0 2rem 0;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
// `;

// const ButtonContainer = styled.div`
//   margin: 1rem 0 2rem 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginWith = styled.h5`
//   cursor: pointer;
// `;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

// const Icon = styled.div`
//   height: 3.5rem;
//   width: 3.5rem;
//   background: ${(props) => props.background};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4rem;
//   color: white;
//   cursor: pointer;
//   svg {
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;

// const ForgotPassword = styled.h4`
//   cursor: pointer;
// `;

// const Input = styled.input`
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 2rem;
//   width: 80%;
//   height: 3rem;
//   padding: 1rem;
//   border: none;
//   outline: none;
//   color: #3c354e;
//   font-size: 1rem;
//   font-weight: bold;
//   &:focus {
//     display: inline-block;
//     box-shadow: 0 0 0 0.2rem #b9abe0;
//     backdrop-filter: blur(12rem);
//     border-radius: 2rem;
//   }
//   &::placeholder {
//     color: #b9abe099;
//     font-weight: 100;
//     font-size: 1rem;
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   margin-top: 0.5rem;
// `;

// const Button = styled.button`
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   text-transform: uppercase;
//   letter-spacing: 0.2rem;
//   width: 65%;
//   height: 3rem;
//   border: none;
//   color: white;
//   border-radius: 2rem;
//   cursor: pointer;
// `;

// import React, { useContext, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import Tilt from 'react-parallax-tilt';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import styled from "styled-components";
// import { FaGoogle } from "react-icons/fa";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false); // New state variable for redirect
//   const { setUser } = useContext(UserContext);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   function validateEmail(email) {
//     const emailRegex = /^\d{6}$|^\d{10}$|^\d{6}@mail\.jiit\.ac\.in$|^\d{10}@mail\.jiit\.ac\.in$/;
//     return emailRegex.test(email);
//   }

//   function validatePassword(password) {
//     return password.length >= 8;
//   }

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();

//     // Check if email is provided
//     if (!email.trim()) {
//       setEmailError('Email is required');
//       return;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format');
//       return;
//     } else {
//       setEmailError('');
//     }

//     // Check if password is provided
//     if (!password.trim()) {
//       setPasswordError('Password is required');
//       return;
//     } else if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     } else {
//       setPasswordError('');
//     }

//     try {
//       const { data } = await axios.post('/login', { email, password });
//       setUser(data);

//       alert('Login successful.');
//       setRedirect(true); // Redirect after successful login
//     } catch (e) {
//       alert('Login failed.');
//     }
//   }

//   const loginwithgoogle = () => {
//     window.open("http://localhost:4000/auth/google/callback", "_self")
//   }

//   if (redirect) {
//     return <Navigate to={"/dashboard"} />; // Redirect to dashboard page
//   }

//   const WelcomeText = styled.h2`
//     margin: 3rem 0 2rem 0;
//   `;

//   const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;

//   /* Add the additional styling for the registration link */
//   .register-link {
//     margin-top: 1rem; /* Add some top margin */
//     text-align: center;
//     color: #b9abe0; /* Change text color */
//   }

//   .register-link a {
//     text-decoration: underline;
//     color: #ffffff; /* Change link color */
//   }
// `;

//   return (
//     <div className="App bg-black h-screen flex justify-center items-center">
//       <MainContainer>
//         <WelcomeText>Welcome</WelcomeText>
//         <InputContainer>
//           <Input type="text" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
//           {emailError && <ErrorText>{emailError}</ErrorText>}
//           <Input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
//           {passwordError && <ErrorText>{passwordError}</ErrorText>}
//         </InputContainer>
//         <ButtonContainer>
//           <Button content="Sign In" onClick={handleLoginSubmit} />

//         </ButtonContainer>
//         <div className="text-center py-2 text-blue-500"> {/* Updated color to blue */}
//   <p>Don't have an account?</p>
//   <Link className="underline text-white-500" to={"/register"}>
//     Register here
//   </Link>
// </div>

// <div style={{ marginTop: '29px' }}>OR LOGIN WITH</div>

//         {/* <LoginWith>OR LOGIN WITH</LoginWith> */}
//         <HorizontalRule />
//         {/* <IconsContainer>
//         <Icon color="#DB4437" onClick={loginwithgoogle}>
//   <FontAwesomeIcon icon={faGoogle} />
// </Icon>

//         </IconsContainer> */}
//         <FontAwesomeIcon
//   icon={faGoogle}
//   style={{
//     fontSize: '1.5rem', // Decrease the size of the icon
//     color: '#DB4437', // Change the color of the 'G' to red
//     // background: '#ffffff', // Set the background color to white
//     borderRadius: '50%', // Make the icon circular
//     padding: '0.0rem', // Add padding for spacing
//     cursor: 'pointer', // Change cursor to pointer on hover
//   }}
//   onClick={loginwithgoogle}
// />

//       </MainContainer>
//     </div>
//   );
// }

// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   background-image: url("./background.jpg"); /* Add this line */
//   background-size: cover; /* Add this line */
//   background-position: center; /* Add this line */
//   @media only screen and (max-width: 320px) {
//     width: 80vw;
//     height: 90vh;
//     hr {
//       margin-bottom: 0.3rem;
//     }
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 360px) {
//     width: 80vw;
//     height: 90vh;
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 411px) {
//     width: 80vw;
//     height: 90vh;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 80vw;
//     height: 80vh;
//   }
//   @media only screen and (min-width: 1024px) {
//     width: 70vw;
//     height: 50vh;
//   }
//   @media only screen and (min-width: 1280px) {
//     width: 30vw;
//     height: 80vh;
//   }
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
// `;

// const ButtonContainer = styled.div`
//   margin: 1rem 0 2rem 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginWith = styled.h5`
//   cursor: pointer;
//   margin-bottom: 1rem; // Add this line to reduce the margin below the text
// `;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// // const IconsContainer = styled.div`
// //   display: flex;
// //   justify-content: space-evenly;
// //   margin: 1rem 0 2rem 0; /* Updated margin */
// //   width: 80%;
// // `;

// const Icon = styled.div`
//   height: 3.5rem;
//   width: 3.5rem;
//   background: ${(props) => props.background};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4rem;
//   color: white;
//   cursor: pointer;
//   svg {
//     width: 1.5rem;
//     height: 1.5rem;
//     color: ${(props) => props.color}; // Apply color to the icon
//   }
// `;

// const Input = styled.input`
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   border-radius: 2rem;
//   width: 100px;
//   height: 3rem;
//   padding: 1rem;
//   border: none;
//   outline: none;
//   color: #3c354e;
//   font-size: 1rem;
//   font-weight: bold;
//   &:focus {
//     display: inline-block;
//     box-shadow: 0 0 0 0.2rem #b9abe0;
//     backdrop-filter: blur(12rem);
//     border-radius: 2rem;
//   }
//   &::placeholder {
//     color: #b9abe099;
//     font-weight: 100;
//     font-size: 1rem;
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   margin-top: 0.5rem;
// `;
// const Button = styled.button`
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   text-transform: uppercase;
//   letter-spacing: 0.2rem;
//   width: 65%;
//   height: 3rem;
//   border: none;
//   color: white;
//   border-radius: 2rem;
//   cursor: pointer;
//   position: relative; // Add this line
//   overflow: hidden; // Add this line
//   z-index: 1; // Add this line

//   &::before {
//     content: "${props => props.content}"; // Use props to render the content
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: -1;
//     color: transparent;
//   }
// `;

// import styled from "styled-components";
// import Button from "../Component/Button";
// import Icon from "../Component/Icon";
// import Input from "../Component/Input";
// import { IoLogoGoogle } from "react-icons/io";
// import React, { useState, useContext } from "react";

// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function LoginPage() {
//   const GoogleBackground = "linear-gradient(to right, #4285F4, #34A853)";

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const { setUser } = useContext(UserContext);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   function validateEmail(email) {
//     const emailRegex = /^\d{6}$|^\d{10}$|^\d{6}@mail\.jiit\.ac\.in$|^\d{10}@mail\.jiit\.ac\.in$/;
//     return emailRegex.test(email);
//   }

//   function validatePassword(password) {
//     return password.length >= 8;
//   }

//   async function handleLoginSubmit(ev) {
//     ev.preventDefault();

//     // Check if email is provided
//     if (!email.trim()) {
//       setEmailError('Email is required');
//       return;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format');
//       return;
//     } else {
//       setEmailError('');
//     }

//     // Check if password is provided
//     if (!password.trim()) {
//       setPasswordError('Password is required');
//       return;
//     } else if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       return;
//     } else {
//       setPasswordError('');
//     }

//     try {
//       const { data } = await axios.post('/login', { email, password });
//       setUser(data);

//       alert('Login successful.');
//       setRedirect(true);
//     } catch (e) {
//       alert('Login failed.');
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/dashboard" />;
//   }

//   return (
//     <MainContainer>
//       <WelcomeText>Welcome</WelcomeText>
//       <InputContainer>
//         <Input
//           type="email"
//           placeholder="College email id"
//           value={email}
//           onChange={(ev) => setEmail(ev.target.value)}
//         />
//         {emailError && <p className="text-red-500">{emailError}</p>}
//         <div className="relative flex">
//           <Input
//             type={showPassword ? "text" : "password"}
//             placeholder="password (min length 8)"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-2 cursor-pointer text-white"
//           >
//             <FontAwesomeIcon icon={showPassword ? FaEye : FaEyeSlash} />
//           </span>
//         </div>
//         {passwordError && <p className="text-red-500">{passwordError}</p>}
//       </InputContainer>
//       <ButtonContainer>
//         <button
//           type="submit"
//           onClick={handleLoginSubmit}
//           className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 mt-2"
//         >
//           Login
//         </button>
//       </ButtonContainer>
//       <div className="text-center py-2 text-gray-500">
//         <p>Don't have an account?</p>
//         <Link className="underline text-white" to={"/register"}>
//           Register here
//         </Link>
//       </div>
//     </MainContainer>
//   );
// }

// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   @media only screen and (max-width: 320px) {
//     width: 80vw;
//     height: 90vh;
//     hr {
//       margin-bottom: 0.3rem;
//     }
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 360px) {
//     width: 80vw;
//     height: 90vh;
//     h4 {
//       font-size: small;
//     }
//   }
//   @media only screen and (min-width: 411px) {
//     width: 80vw;
//     height: 90vh;
//   }

//   @media only screen and (min-width: 768px) {
//     width: 80vw;
//     height: 80vh;
//   }
//   @media only screen and (min-width: 1024px) {
//     width: 70vw;
//     height: 50vh;
//   }
//   @media only screen and (min-width: 1280px) {
//     width: 30vw;
//     height: 80vh;
//   }
// `;

// const WelcomeText = styled.h2`
//   margin: 3rem 0 2rem 0;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
//   input {
//     width: 80%; /* Adjusted width of the input field */
//   }
// `;

// const ButtonContainer = styled.div`
//   margin: 1rem 0 2rem 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default LoginPage;

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

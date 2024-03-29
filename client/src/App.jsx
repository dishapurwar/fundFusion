import { useState } from "react";
import { createContext } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Dashboard from "./pages/dashboard.jsx";
import LinearStepper from "./pages/LinearStepper.jsx";
import Layout from './Layout';
import { UserContextProvider } from './UserContext';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";


import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ContactPage from "./pages/ContactPage.jsx";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === "login") return <LoginPage />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;
    return <Recovered />;
  }

  return (
    <UserContextProvider>
      <RecoveryContext.Provider
        value={{ page, setPage, otp, setOTP, setEmail, email }}
      >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/startup" element={<LinearStepper />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
        <CssBaseline />
      </RecoveryContext.Provider>
    </UserContextProvider>
  );
}


export default App;

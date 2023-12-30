import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/loginPage";
import { Register } from "./Pages/RegisterPage";
import { LandingPage } from "./Pages/LandingPage";
import { ProductPage } from "./Pages/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Product" element={<ProductPage></ProductPage>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

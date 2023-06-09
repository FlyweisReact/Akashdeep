/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange from "./components/exchange";
import OP1 from "./components/order_p1";
import OP2 from "./components/order_p2";
import FAAS from "./components/faas";
import Offer from "./components/offer";
import Main2 from "./components/main2";
import Home from "./components/home";
import Main3 from "./components/main3";
import Main4 from "./components/main4";
import Main5 from "./components/main5";
import Main6 from "./components/main6";
import OTP from "./components/otp";
import StudentLoan from "./components/student_loan";

// Customer css
import "./Style/Header.css";
import "./Style/Layout.css";
import "./Style/Component.css";
import "./Style/Footer.css";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Foreign-Currency" element={<Main2 />} />
          <Route path="/Educational-Loans" element={<Main4 />} />

          
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/customer-det" element={<OP1 />} />
          <Route path="/customer-det2" element={<OP2 />} />
          <Route path="/faas" element={<FAAS />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main3" element={<Main3 />} />
          <Route path="/main5" element={<Main5 />} />
          <Route path="/main6" element={<Main6 />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/student-loan" element={<StudentLoan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/ContactUs";
import HomePage from "./pages/Home";

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

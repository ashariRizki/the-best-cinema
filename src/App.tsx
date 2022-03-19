import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/ContactUs";
import DetailMoviePage from "./pages/DetailMovie";
import FAQPage from "./pages/FAQ";
import HomePage from "./pages/Home";

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/movie/:id' element={<DetailMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;

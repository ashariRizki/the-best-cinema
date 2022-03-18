import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailMoviePage from "./pages/DetailMovie";
import HomePage from "./pages/Home";

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<DetailMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;

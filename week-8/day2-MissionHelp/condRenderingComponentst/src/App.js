import "./App.css";
import laptop1 from "./assets/laptop1.png";
import laptop2 from "./assets/laptop2.png";
import laptop3 from "./assets/laptop3.png";
import laptop4 from "./assets/laptop4.png";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="student-dashboard" element={<StudentDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;

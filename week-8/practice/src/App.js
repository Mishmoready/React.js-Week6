import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="studentdashboard" element={<StudentDashboard />}></Route>
        {/* If you wanted to have a custom page for if the user types in a route that doesn't exist: */}
        <Route path="*" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;

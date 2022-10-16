import Dash from "./pages/Dashboard/Dash";
import DashboardMessages from "./pages/Dashboard/components/DashboardMessages";
import DashboardTasks from "./pages/Dashboard/components/DashboardTasks";
import Home from "./pages/Home";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}>
          {/* Nested routes are only accessible after the parent route ie after /dash/... */}
          <Route path="tasks" element={<DashboardTasks />} />
          <Route path="messages" element={<DashboardMessages />} />
        </Route>
      </Routes>

      {/* NavLink which is very similar to Link, except that NavLink knows if it is currently active */}
      <NavLink to="/" style={({ isActive }) => (isActive ? { backgroundColor: "red" } : undefined)} end>
        Home
      </NavLink>
      <br />
      <NavLink to="/dash/messages" style={({ isActive }) => (isActive ? { backgroundColor: "blue" } : undefined)}>
        Messages
      </NavLink>
      <br />
      <NavLink to="/dash/tasks" style={({ isActive }) => (isActive ? { backgroundColor: "pink" } : undefined)}>
        Tasks
      </NavLink>
    </>
  );
}

export default App;

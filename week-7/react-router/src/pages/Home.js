import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={classes.container}>
      <div>This is the Home page</div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link className={classes.myLink} to="/login">
        Login
      </Link>
      <Link to="/signup">SIGNUP</Link>
    </div>
  );
}

export default Home;

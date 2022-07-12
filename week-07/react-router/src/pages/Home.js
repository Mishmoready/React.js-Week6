import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div>The Home page</div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/book">Book</Link>
      <br />
      <Link to="/product">Product</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </div>
  );
}

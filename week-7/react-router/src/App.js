import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Book from "./pages/Book";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Defining the routes in the app by specifying the path and the component for each path */}
        <Routes>
          {/* localhost:3000 =>  localhost:3000/  */}
          <Route path="/" element={<Home />} />
          {/* localhost:3000 + /about =>  localhost:3000/about  */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productID" element={<Product />} />
          {/* Exercise 2 */}
          <Route path="/signup" element={<Signup />} />
          {/* Exercise 3 */}
          <Route path="/book/:bookID" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

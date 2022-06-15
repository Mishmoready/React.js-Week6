import { useEffect } from "react";
import Form from "./Forms";
import logo from "./logo.svg";
import "./App.css";
import CondRendering from "./CondRendering";
import IfElseRendering from "./IfElseRendering";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

function App() {
  useEffect(function () {
    console.log("mounted message");
    return function () {
      console.log("unmounted!");
    };
  });
  return (
    <div className="App">
      {/* <Form></Form> */}
      {/* <CondRendering></CondRendering> */}
      {/* <IfElseRendering></IfElseRendering> */}
      {/* <Exercise1></Exercise1> */}
      <Exercise2></Exercise2>
    </div>
  );
}

export default App;

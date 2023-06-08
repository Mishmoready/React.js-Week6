import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./common/Button";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Greeting />
      <h1 className="header">This is another H1q</h1>
      <Button> Press Me Harder</Button>
      <Button> Harder</Button>
      <Button> Press</Button>
      <Button className="my-other-button"> Me</Button>

      <Form></Form>
    </div>
  );
}

export default App;

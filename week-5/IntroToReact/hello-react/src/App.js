import Footer from "./Footer";

const name = "Buddy M";
const theElement = <h1>Hello, {name}</h1>;

function App() {
  return (
    <div>
      <h1>{name}</h1>
      {theElement}
      <p>{5 * 5}</p>
      <Footer carName="Toyota"></Footer>
    </div>
  );
}

export default App;

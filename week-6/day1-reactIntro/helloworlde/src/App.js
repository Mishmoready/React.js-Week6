import Footer from "./Footer";

const message1 = "Hey You";
const message2 = "What's going on";

function App() {
  return (
    <>
      <h1>{message1}</h1>
      <p>{message2 + "??"}</p>
      <Footer></Footer>
    </>
  );
}
// A comment
export default App;

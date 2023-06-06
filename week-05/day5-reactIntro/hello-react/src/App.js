import Footer from "./Footer";


const message1 = "Hey you";
const message2 = "What's going on"

export default  function App(props) {
  return (
    <>
      <h1>{message1} </h1>
      <p>{message2 + "??"}</p>
      <Footer></Footer>
    </>
    
  );
}



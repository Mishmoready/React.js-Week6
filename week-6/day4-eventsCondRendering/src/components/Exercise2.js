import { useState } from "react";
import dogImg from "../assets/dog.jpg";

function Exercise2() {
  const [showACat, setShowACat] = useState();
  const [showADog, setShowADog] = useState();

  const handleShowCat = () => {
    setShowACat(!showACat);
  };

  const handleShowDog = () => {
    setShowADog(!showADog);
  };

  return (
    <>
      <button onClick={handleShowCat}>Show me the cat</button>
      <button onClick={handleShowDog}>Show me the dog</button>
      {showACat && (
        <img src="https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY="></img>
      )}
      {showADog && <img src={dogImg} alt="dog"></img>}
    </>
  );
}

export default Exercise2;

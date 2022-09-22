import { useState } from "react";

export default function CatDog() {
  const [showACat, setShowACat] = useState(false);
  const [showADog, setShowADog] = useState(false);

  const handleShowCat = function () {
    setShowACat(!showACat);
  };
  const handleShowDog = () => setShowADog(!showADog);

  return (
    <div>
      <button onClick={handleShowCat}>Show me the Cat</button>
      <button onClick={handleShowDog}>Show me the Dog</button>
      <br />
      {showACat && (
        <img src="https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY="></img>
      )}
      {showADog && (
        <img src="https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg"></img>
      )}
    </div>
  );
}

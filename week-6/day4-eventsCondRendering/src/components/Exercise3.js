import { useState } from "react";
export default function Exercise3() {
  const [animalImageURL, setAnimalImageURL] = useState("");

  const handleShowCat = () => setAnimalImageURL("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png");
  const handleShowDog = () =>
    setAnimalImageURL(
      "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
    );

  const handleShowFrog = () =>
    setAnimalImageURL(
      "https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg?crop=4:3,smart&width=1200&height=900&upscale=true"
    );

  return (
    <div>
      <button onClick={handleShowCat}>Show me the Cat</button>
      <br />
      <button onClick={handleShowDog}>Show me the Dog</button>
      <br />
      <button onClick={handleShowFrog}>Show me the Frog</button>
      <br />
      <img src={animalImageURL} />
    </div>
  );
}

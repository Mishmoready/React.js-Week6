import { useState } from "react";
function Exercise1() {
  const [showACat, setShowACat] = useState(false);
  const [showADog, setShowADog] = useState(false);

  const handleShowCat = () => setShowACat(!showACat);
  const handleShowDog = () => setShowADog(!showADog);

  return (
    <div>
      <button onClick={handleShowCat}>Show me the Cat</button>
      <br />
      <button onClick={handleShowDog}>Show me the Dog</button>
      <br />

      {showACat && (
        <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
      )}

      {showADog && (
        <img src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900" />
      )}
    </div>
  );
}

export default Exercise1;

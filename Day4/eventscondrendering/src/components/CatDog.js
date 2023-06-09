import { useState } from "react";

export default function CatDog() {
  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);

  const handleShowCat = () => setShowCat(!showCat);
  const handleShowDog = () => setShowDog(!showDog);

  return (
    <>
      <button onClick={handleShowCat}>Cat</button>
      {showCat}

      <button onClick={handleShowDog}>Dog</button>
      {showDog}
    </>
  );
}

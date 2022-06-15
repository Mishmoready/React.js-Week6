import { useState } from "react";
export default function CondRendering() {
  const [showContent, setShowContent] = useState(false);
  const changeContent = () => setShowContent(!showContent);

  return (
    <div>
      <div>
        {/* Conditional Rendering */}
        {showContent
          ? "Congrats you found the hidden content!"
          : "Click the button"}
      </div>
      {/* Using the logical && (AND) operators */}
      <div>{showContent && "Now you see me"}</div>
      <button onClick={changeContent}>Click here</button>
    </div>
  );
}

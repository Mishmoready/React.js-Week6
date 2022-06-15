import { useState } from "react";
export default function CondRendering() {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("Click the button"); // for the If Else example

  // For the && (AND) operator conditional rendering example
  // const changeContent = () => setShowContent(!showContent);

  // Conditional rendering using an If Else statement
  const changeContent = () => {
    // If showContent is true, then make it false
    if (showContent) {
      setContent("I'm false right now. Click the button"); // set the content below to this text
      setShowContent(false); // Now that we've updated the below content, set the showContent state back to false
    } else {
      // else if showContent is false
      setContent("Congrats you found the hidden content!!");
      setShowContent(true);
    }
  };

  return (
    <div>
      <div>
        {content} {/* For If Else example */}
        {showContent && "Congrats you found the hidden content!"}{" "}
        {/* && (AND) operator example */}
        {showContent
          ? "Congrats you found the hidden content!"
          : "Click the button below"}{" "}
        {/* Ternary Statement example */}
      </div>
      <button onClick={changeContent}> Click here </button>
    </div>
  );
}

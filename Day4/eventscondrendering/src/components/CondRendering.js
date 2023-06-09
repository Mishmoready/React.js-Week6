import { useState } from "react";
const CondRendering = () => {
  const [showContent, setShowContent] = useState(false);
  //   const [content, setContent] = useState("Click the button");

  const changeContent = function () {
    setShowContent(!showContent);
  };

  //   const changeContent = () => {
  //     // If showContent is true, then make it false
  //     if (showContent) {
  //       setContent("I'm false right now. Click the button");
  //       setShowContent(false);
  //     } else {
  //       // else if showContent is false
  //       setContent("Congrats you found the hidden content!!");
  //       setShowContent(true);
  //     }
  //   };

  return (
    <div>
      {/* <div>{showContent ? "Congrats you found the hidden content" : "Click the button"}</div> */}
      {/* <div>{content}</div> */}
      <div>{showContent && "Congrats you found the hidden content"}</div>
      <button onClick={changeContent}>Click here</button>
    </div>
  );
};

export default CondRendering;

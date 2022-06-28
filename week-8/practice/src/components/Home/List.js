import Button from "@mui/material/Button";
import { useState } from "react";
import "./List.css";
import steps from "../../assets/steps dark.png";
import DigitalCompetencies from "./DigitalCompetencies";
import KeyCompetencies from "./KeyCompetencies";
import LearningPathways from "./LearningPathways";

export default function () {
  const [displayedContent, setDisplayedContent] = useState(
    <LearningPathways />
  );
  const [displayImage, setDisplayImage] = useState(true);

  function handleClick() {
    console.log("clicked");
    setDisplayImage(!displayImage);
  }

  function handleContentClick(event) {
    console.log(event.target.id);

    switch (event.target.id) {
      case "learning-pathways":
        setDisplayedContent(<LearningPathways />);
        break;
      case "digitial-technologies":
        setDisplayedContent(<DigitalCompetencies />);
        break;
      case "key-competencies":
        setDisplayedContent(<KeyCompetencies />);
      default:
        console.log("OOPS");
        break;
    }

    // if (event.target.id === "learning-pathways") {
    //   setDisplayedContent(<LearningPathways />);
    //   return;
    // }
    // if (event.target.id === "digitial-technologies") {
    //   setDisplayedContent(<DigitalCompetencies />);
    //   return;
    // }
    // if (event.target.id === "key-competencies") {
    //   setDisplayedContent(<KeyCompetencies />);
    //   return;
    // }
  }

  return (
    <div className="list_container">
      <div className="list_top">
        <Button
          sx={{
            border: "3px solid",
            ":hover": {
              border: "3px solid red",
            },
            padding: "1px 15px",
          }}
          variant="outlined"
        >
          Test
        </Button>
        <button
          id="learning-pathways"
          className={`list_btn`}
          onClick={handleContentClick}
        >
          Learning Pathways
        </button>
        <button
          id="digitial-technologies"
          className="list_btn"
          onClick={handleContentClick}
        >
          Digital Technologies
        </button>

        <button
          id="key-competencies"
          className="list_btn"
          onClick={handleContentClick}
        >
          Key Competencies
        </button>
        <button onClick={handleClick}>Something else</button>
      </div>
      <div className="list_bottom">{}</div>
      {displayImage && <img src={steps}></img>}
      {displayedContent}

      {/* Ternary Operator (for only true/false): */}
      {/* {conditionToCheck? thingToFalseIfTrue:thingToRenderIfFalse} */}
    </div>
  );
}

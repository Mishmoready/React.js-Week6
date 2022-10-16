import { useState } from "react";
import "./StudentDashboard.css";
import Instructions from "./components/Instructions";
import LearningObjectives from "./components/LearningObjectives";
import MakeProject from "./components/MakeProject";
function StudentDashboard() {
  const [displayedContent, setDisplayedContent] = useState({ comp: <Instructions />, name: "Instructions" });
  console.log(<Instructions />);

  function handleContentClick(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "instructions":
        setDisplayedContent({ comp: <Instructions />, name: "Instructions" });
        break;
      case "learning-objectives":
        setDisplayedContent({ comp: <LearningObjectives />, name: "LearningObjectives" });
        break;
      default:
        break;
    }
  }

  return (
    <div className="SDB-container">
      <button
        id="instructions"
        className={`btn ${displayedContent.name === "Instructions" && "btn-active"}`}
        onClick={handleContentClick}
      >
        Show Instructions
      </button>
      <button
        id="learning-objectives"
        className={`btn ${displayedContent.name === "LearningObjectives" ? "btn-active" : ""}`}
        onClick={handleContentClick}
      >
        Show Learning objectives
      </button>
      <button
        id="make-project"
        className={`btn ${displayedContent.name === "MakeProject" ? "btn-active" : ""}`}
        onClick={handleContentClick}
      >
        Show Make Project
      </button>

      {displayedContent.comp}
    </div>
  );
}

export default StudentDashboard;

import "./StudentDashboard.css";
import List from "../components/Home/List";

export default function StudentDashboard() {
  return (
    <div className="sdb_container">
      <div className="sdb_sidebar">
        <div>BUTTON 1</div>
        <div>LEARNING OBJECTIVES</div>
        <div>DIGITIAL COMPETENCIES</div>
        <div>BUTTON 4</div>
        <div>BUTTON 5</div>
      </div>
      <div className="sdb_content">
        <List />
      </div>
    </div>
  );
}

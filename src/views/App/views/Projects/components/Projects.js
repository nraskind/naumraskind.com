import "./Projects.css";
import projectList from "./projectList";
import Timeline from "react-image-timeline";
import "react-image-timeline/dist/timeline.css";

export default function Projects() {
  return <Timeline reverseOrder={true} events={projectList}></Timeline>;
}

import "./Coursework.css";
import Course from "./Course";
import courseList from "./courseList";
export default function Coursework() {
  return (
    <div>
      {courseList.map((course) => (
        <Course {...course} key={course.courseCode} />
      ))}
    </div>
  );
}

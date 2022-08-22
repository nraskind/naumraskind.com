import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ListGroup from "react-bootstrap/ListGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "./Course.css";

export default function Course(props) {
  const { courseName, courseCode, semester, topics, projects } = props;

  const showCourseCode = (props) => <Tooltip {...props}>{courseCode}</Tooltip>;

  const listCourseSection = (courseSectionTitle, courseSectionContainer) => (
    <ListGroup variant="flush">
      <ListGroup.Item className="text-center" variant="primary">
        {courseSectionTitle}
      </ListGroup.Item>
      {courseSectionContainer.map((courseSectionEntry, entryIndex) => (
        <ListGroup.Item key={entryIndex}>{courseSectionEntry}</ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Col className="d-inline-block" xs={12} sm={12} md={6} lg={4}>
      <Card className="m-4" bg="light" text="dark">
        <Card.Header>
          <Card.Title className="text-center">
            {courseName}
            <OverlayTrigger
              placement="right"
              delay={{ hide: 250 }}
              overlay={showCourseCode}
            >
              <sup>
                <FontAwesomeIcon icon="fas fa-info-circle" size="xs" />
              </sup>
            </OverlayTrigger>
          </Card.Title>
          <Card.Subtitle className="text-center mb-2 text-muted">
            {semester}
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          {topics && listCourseSection("Topics", topics)}
          {projects && listCourseSection("Projects", projects)}
        </Card.Body>
      </Card>
    </Col>
  );
}

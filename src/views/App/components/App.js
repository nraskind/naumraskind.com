import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Coursework from "../views/Coursework";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          const navigationLink = "/" + selected;
          navigate(navigationLink);
        }}
      >
        <Toggle />
        <Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon="fa-solid fa-house" size="lg" />
            </NavIcon>
            <NavText>Homepage</NavText>
          </NavItem>
          <NavItem eventKey="projects">
            <NavIcon>
              <FontAwesomeIcon icon="fa-solid fa-laptop-code" size="lg" />
            </NavIcon>
            <NavText>Projects</NavText>
          </NavItem>
          <NavItem eventKey="coursework">
            <NavIcon>
              <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" />
            </NavIcon>
            <NavText>Coursework</NavText>
          </NavItem>
        </Nav>
      </SideNav>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/coursework" element={<Coursework />} />
        </Routes>
      </main>
    </>
  );
}

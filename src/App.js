import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <a href="https://github.com/nraskind/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" size="6x" />
          </a>
          <a
            href="https://www.linkedin.com/in/naum-raskind-b83a461b8/"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="6x" />
          </a>
          <a href="mailto:nraskind@umich.edu">
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="6x" />
          </a>
        </span>
        <h1>Naum Raskind</h1>
      </header>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}>
      <div className="card">
        <h2>Hello!</h2>
        <p>
          I'm a programmer and artist on the side. I'm interested in data
          science, webdev, and gamedev.
        </p>
        <a href="https://github.com/liang452" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      <div className="navbar">
        <Link to="/">
          <button type="button">about</button>
        </Link>

        <Link to="/projects" style={{marginLeft: "8px"}}>
          <button type="button">projects</button>
        </Link>

        <Link to="/art" style={{marginLeft: "8px"}}>
          <button type="button">art</button>
        </Link>

      </div>
    </div>
  );
}

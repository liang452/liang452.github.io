import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}>
        <Link to="/" >
          <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>
    
      <h1>projects</h1>

    <b>secret game dev project</b>

      <b>pulsar star classification.</b>
      <p>identifying <a href="https://en.wikipedia.org/wiki/Pulsar">pulsar</a> and nonpulsar stars with both numeric and image data for cs 4641 machine learning.</p>

      <b>er room management.</b>
      <p>frontend for a mysql project from cs 4400 intro to databases</p>

      <b>custom spotify wrapped</b>
      <p>using spotify's api to create a summary of listening data</p>

      <b>this website</b>
        <p>made with React and vite, deployed using github actions.</p>
    </div>
  );
}

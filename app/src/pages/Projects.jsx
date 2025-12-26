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
      <h4>pulsar star classification.</h4>
      <h4>lotus eater.</h4>
      <p>Check out the VGDev site! I've worked on a bunch of games there. </p>
    </div>
  );
}

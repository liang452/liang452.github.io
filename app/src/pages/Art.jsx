import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function Art() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >

         <Link to="/" >
          <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>

        <h1>art</h1>
        <h3>wip</h3>
      
    </div>
  );
}

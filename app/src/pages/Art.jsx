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

        <h2>art</h2>
        <h3>page in progress</h3>
      
    </div>
  );
}

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Writeups() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop:"1.5rem",
      }}>
    
    <div>
      <Link to="/" ><FontAwesomeIcon icon={faArrowLeft} size="2x"/></Link>
          {/* <h2> projects </h2> */}
             </div>
      
      <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
            maxWidth: "80%",
            marginTop: "1rem",
        }}>

          The challenge description for High-tide featured a Google Maps image. You can see a French flag. 
          Reverse image searching this image pulls up a number of castles. Assuming this is by the ocean (since the name of the challenge is "high-tide") gives us "Mont-Saint-Michel".

        </div>

      

    
    </div>
  );
}

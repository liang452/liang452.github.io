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

          <div className="boxcard">
           <Link to="/pcg">
             <b>CSAW Quals 2026 - High-tide</b></Link>
        <p></p>
        </div>

      

    
    </div>
    </div>
  );
}

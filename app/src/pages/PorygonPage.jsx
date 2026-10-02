import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Porygon from "../components/porygon.jsx";


export default function PorygonPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}>
        <Link to="/projects" >
          <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>
    <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "20px",
        padding:"20px",
        maxWidth:"50%",
      }}>
      <div>
     <Porygon /> 
     </div>
     <div>A 3D model of a Porygon created for CS 3451, originally in Processing but updated to p5.js here. </div>
    </div>
    </div>
    
  );
}

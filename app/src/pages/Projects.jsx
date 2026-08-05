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
    
      <h2>projects</h2>
      <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
            maxWidth: "88%",
            marginTop: "1.5rem",
        }}>

        <div className="boxcard">
           <a href="https://github.gatech.edu/pages/eliang39/vraps">
             <b>VRAPS VR Game</b></a>
        <p>a VR game built in C#/Unity to teach sustainabie construction concepts</p>
        </div>

        <div className="boxcard">
           <a href="https://github.gatech.edu/pages/eliang39/vraps">
             <b>Ocean Explorer</b></a>
        <p>a web game built using PixiJS to teach ocean currents and temperatures</p>
        </div>

        <div className="boxcard">
        <Link to="/porygon"><b>p5.js Porygon</b></Link>
        <p>a Porygon model/animation math with Processing, and then adapted for p5.js</p>
        </div>

        <div className="boxcard">
           <a href="https://github.gatech.edu/pages/eliang39/CS-4641-Group-4-Docs/final-report">
             <b>pulsar star classification</b></a>
        <p>identifying <a href="https://en.wikipedia.org/wiki/Pulsar">pulsar</a> stars with numeric and image data with machine learning methods such as GMM, random forest, CNNs.</p>
        </div>
        
        <div className="boxcard">
        <a href=""><b>er room management site</b></a>
        <p>fullstack web application for a simulated ER management mySQL project </p>
        </div>

        <div className="boxcard">
        <a href="https://github.com/liang452/custom-spotify-wrapped">
        <b>custom spotify wrapped</b></a>
        <p>uses spotify's (deprecated) api to create a summary of listening data</p>
        </div>

        <div className="boxcard">
        <a href=""><b>detecting parkinson's FoG events</b></a>
            <p>employed binary classification techniques to detect freezing of gait events in   
                <a href=
                "https://www.kaggle.com/competitions/tlvmc-parkinsons-freezing-gait-prediction/overview"> this</a> dataset </p>
        </div>

        <div className="boxcard">
        <a href=""><b>terminal chatroom</b></a>
        <p>simple chatroom made in Python that runs in terminal</p>
        </div>

        
    </div>
    </div>
  );
}

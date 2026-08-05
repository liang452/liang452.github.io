import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}>
         <Link to="/" style={{margin:"20px"}}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>
        <br></br>
    
      <div className="card" style={{width: "60%"}}>
        <div style={{marginLeft:"15px"}}>
        <h2>more about me</h2>
        
        <p>
          I'm currently a Computer Science major at Georgia Tech with concentrations in machine learning and information management.</p>
          
         <p> I like making software that centers on interactivity - data visualizations, game development, and websites. Currently I work with the VRAPs lab making a VR game about sustainable construction.
          Previously, I've been an Undergraduate Research Assistant at the University of Texas at Dallas under Dr. Xiwei Tang working with wearable sensor data.
        </p>

        <p> In my free time, I like looking into OS and cybersecurity. Outside of computer science, I'm enjoy drawing and rock climbing. I'm also a member of GT's <a href="https://www.gtvgdev.com/">VGDev</a> club.</p>
        </div>
      </div>
  

    </div>
  );
}

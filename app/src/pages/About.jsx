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

      <div className="card">
        <h2>more about me -</h2>
        <p>
          I'm currently a computer science major at Georgia Tech. 
          I like making interactive data visualizations, games, and websites. I also like looking into OS and cybersecurity in my free time. 
        </p>
        <p>I'm a member of GT's <a href="https://www.gtvgdev.com/">VGDev</a> club, and I roller skate and rock climb for fun!</p>
      </div>

      
    </div>
  );
}

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}>

        <div class="" style={{display:"flex", padding:"20px", flexWrap:"wrap", justifyContent:"center"}}>
        <img className="imagebox" src='https://i.imgur.com/zHjzjBd.jpeg'
            style={{height:"250px", width:"380px", overflow:"hidden"}}></img>

        <div style={{justifyContent:"center"}}> 
          <div className="card" style={{width: "275px", textAlign:"left"}}>
              <h2>hello!</h2>
              <p>
                i'm a programmer and artist interested in data
                science, webdev, and gamedev.
              </p>
              <a href="https://github.com/liang452" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
              <a href="https://www.linkedin.com/in/rwnliang/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </a>
          </div>

          <div className="navbar" style={{alignContent:"center"}}>
              <Link to="/about">
                <button type="button">about</button>
              </Link>
              <Link to="/projects" style={{marginLeft: "10px"}}>
                <button type="button">projects</button>
              </Link>
          
          </div>
        </div>
       

      </div>

    </div>
  );
}

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TypeShuffle } from '../typeShuffle.jsx';
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !buttonRef.current) return;

    const shuffle = new TypeShuffle(textRef.current);

    const handleShuffle = () => {
      shuffle.trigger("fx6");
    };

    buttonRef.current.addEventListener("click", handleShuffle);

    // animate once on pageload
    shuffle.trigger("fx6");

    return () => {
      buttonRef.current?.removeEventListener(
        "click",
        handleShuffle
      );
    };
  }, []);

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop:"1.5rem",
      }}>
         <Link to="/" style={{margin:"20px"}}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>
        <br></br>


      
      <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "1rem",
        }}>
      
       <div style={{margin:"10px", width:"40%"}}>
        <div className="ascii-container">
              <pre ref={textRef} className="ascii-art">{`
            _,           _,
          .' (        .-' /
        _/..._'.    .'   /
  .-'\x60   )  \x60'-./  _.'
( ^)  )       ) ;= <_
  '-.,\\__ )__.-;'\\   '.
       \\) |'\\ \\)  '.   \\
           \\_/       '-._\\
      
          o                 _,           _,
        O                 .' (        .-' /
          o            _/..._'.    .'   /
                  .-'\x60     ) \x60'-./  _.'
                ( ^) )      )  ;= <_
                  '-.,\\_)_ __.-;'\\   '.
                      \\) |'\\ \\)  '.   \\
                           \\_/       '-._\\
                            
              
              `}</pre>


            </div>

        <button ref={buttonRef}>shuffle!</button>
      </div>
         
      
      <div className="card" style={{width: "50%"}}>
        <div style={{marginLeft:"15px"}}>
        <h2>more about me</h2>
        
        <p>
          I'm currently a Computer Science major at Georgia Tech with concentrations in machine learning and information management. Occasionally I dabble in graphics courses.</p>
          
         <p> I like making software that centers on interactivity - data visualizations, game development, and websites. This summer I worked with the VRAPs lab making a VR game about sustainable construction.
          Previously, I've been an Undergraduate Research Assistant at the University of Texas at Dallas under Dr. Xiwei Tang working with wearable sensor data.
        </p>

        <p> In my free time, I like reading about OS and cybersecurity. Outside of computer science, I'm enjoy drawing and rock climbing. I'm also a member of GT's <a href="https://www.gtvgdev.com/">VGDev</a> club.</p>
        </div>
      </div>
  </div>

    </div>
  );
}

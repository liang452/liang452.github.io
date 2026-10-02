import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function pcg1() {
  // Define the public paths to your four core Unity build files
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity-build/webbuild.loader.js",
    dataUrl: "/unity-build/webbuild.data.br",
    frameworkUrl: "/unity-build/webbuild.framework.js.br",
    codeUrl: "/unity-build/webbuild.wasm.br",
  });

  return (
    <div>
         <Link to="/projects" >
          <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
        </Link>

    <div>A procedurally generated dungeon for a course.</div>

    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Render the canvas object */}
      <Unity 
        unityProvider={unityProvider} 
        style={{ width: 800, height: 600, background: "grey" }} 
      />
    </div>
    </div>
  );
}


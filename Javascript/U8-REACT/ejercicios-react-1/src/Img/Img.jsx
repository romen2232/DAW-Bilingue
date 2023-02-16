import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import imagen from "./pajaro.jpg";

const Img = () => {
  const [opacidad, setOpacidad] = useState("1");

  useEffect(() => {
    document.querySelector("img").style.opacity = opacidad;
  }, [opacidad]);

  return (
  
  <>
  
  <img alt="mi imagen" src={imagen} onMouseOver={()=>{setOpacidad("0.5"); }} onMouseOut={()=>{setOpacidad("1"); }} />
  <h2>opacidad: {opacidad}</h2>
  </>
  );
};

export default Img;

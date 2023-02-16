import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactDom from "react-dom/client";
import imagen from "./pajaro.jpg";
// import CambiarFondo from './CambiarFondo';

const Img = () => {
  const [opacidad, setOpacidad] = useState("1");

  useEffect(() => {
    document.querySelector("img").style.opacity = opacidad;
  }, [opacidad]);

  return (
  
  <>
  
  <img src={imagen} onMouseOver={()=>{setOpacidad("0.5"); }} onMouseOut={()=>{setOpacidad("1"); }} />
  <h2>opacidad: {opacidad}</h2>
  </>
  );
};

export default Img;

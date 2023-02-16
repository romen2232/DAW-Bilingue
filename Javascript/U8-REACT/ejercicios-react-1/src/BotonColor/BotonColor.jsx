import React from 'react';
import { useEffect, useState } from 'react';

const BotonColor = ({onPulsar}) => {
    const [color, setColor] = useState("white");

    useEffect (()=>{
      document.body.style.backgroundColor=fondo;},
      [fondo]);
    return (
    <div>
       <button onClick = {()=>{setColor("#abb8c3")}}>Pulsar para cambiar</button>
    </div>
    )
}

export default BotonColor;
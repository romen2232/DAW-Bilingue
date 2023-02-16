import React from "react";
import { useState , useEffect } from 'react';

const Temporizador = () => {
    

    const [time, setTime] = useState(60);

    useEffect(() => {
        let interval;
        if(time>0){
        
            interval = setInterval(() => {
                setTime(t => t - 1);
            }, 1000);
               
        }
        return () => clearInterval(interval);
    });

    return(
    <h2>{time}</h2>
    );
};
    export default Temporizador;
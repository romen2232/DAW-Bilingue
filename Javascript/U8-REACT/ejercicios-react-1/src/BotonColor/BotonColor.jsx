import React from 'react';
import { useEffect, useState } from 'react';

const BotonColor = () => {
const [color, setColor] = useState('white');

    useEffect(() => {
        document.body.style.background = "#abb8c3";
    },);

    return (
        <button onClick={setColor([color])} type="button">Cambiar color</button>
    );
}

export default BotonColor;

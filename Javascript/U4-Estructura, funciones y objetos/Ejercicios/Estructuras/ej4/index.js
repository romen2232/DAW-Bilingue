const form = document.getElementById("numbers"),
    input1 = document.getElementById("array1"),
    input2 = document.getElementById("array2"),
    select1 = document.getElementById("first"),
    select2 = document.getElementById("second"),
    random1 = document.getElementById("random1"),
    random2 = document.getElementById("random2"),
    info = document.getElementById("info"),
    arrayStructure = /^(\d+,)*(\d+)$/; //Solo permite añadir enteros separados por coma. Dos comas seguidas es equivalente a un 0

const concat = function (e) {
    e.preventDefault();
    if (
        //Si no tienen ambos la estructura correcta el programa no continuara
        !input1.value.match(arrayStructure) ||
        !input2.value.match(arrayStructure)
    ) {
        alert("It should be 2 number arrays");
        return false;
    }

    const numberArray1 = input1.value.split(",");
    const numberArray2 = input2.value.split(",");
    let numberArray = [];

    let longMayor=(numberArray1.length >= numberArray2.length)?numberArray1.length:numberArray2.length;

    for (let i = 0; i < longMayor; i++) {
        if (i<numberArray1.length)
            numberArray.push(numberArray1[i]);
        if (i<numberArray2.length)
            numberArray.push(numberArray2[i]);
    }
    

    info.innerHTML = numberArray;
};

// Generador de arrays aleatorios del 0 al 99 que distingue del boton desde el que se le llama
generateArr = function (e) {
    e.preventDefault();
    let option;
    if (e.target === random1) option = select1.value;
    else if (e.target === random2) option = select2.value;

    let numberArray = "";

    for (let i = 0; i < option; i++) {
        if (i === option - 1) numberArray += Math.round(Math.random() * 100);
        else {
            numberArray += Math.round(Math.random() * 100) + ",";
        }
    }

    if (e.target === random1) input1.value = numberArray;
    else if (e.target === random2) input2.value = numberArray;
};

// EventsListeners
form.addEventListener("submit", concat);
random1.addEventListener("click", generateArr);
random2.addEventListener("click", generateArr);

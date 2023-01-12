const form = document.getElementById("numbers"),
    input = document.getElementById("array"),
    first = document.getElementById("first"),
    position = document.getElementById("position"),
    deleted = document.getElementById("delete"),
    info = document.getElementById("info"),
    arrayStructure = /[a-zA-Z]{6,}/; //Matchea con aquellos que tienen más de 5 letras

//Imprime la primera palabra con más de 5 letras
showFirst = function (e) {
    e.preventDefault();
    info.innerHTML = "";
    const arr = input.value.split(" ");
    for (const string of arr) {
        if (string.match(arrayStructure)) {
            info.innerHTML = `${arr} <br> ${string}`;
            break;
        }
    }
};

//Imprime la posicion de la primera palabra con más de 5 letras
showPosition = function (e) {
    e.preventDefault();
    info.innerHTML = "";
    const arr = input.value.split(" ");
    for (const i in arr) {
        if (arr[i].match(arrayStructure)) {
            info.innerHTML = `${arr} <br> ${i}`;
            break;
        }
    }
};

//Borra rodas las palabras con mas de 5 letras
deleteWords = function (e) {
    e.preventDefault();
    info.innerHTML = "";
    const arr = input.value.split(" ");
    const arrDeleted = arr.filter((word) => !word.match(arrayStructure));
    info.innerHTML = `${arrDeleted}`;
};

//EventsListeners
first.addEventListener("click", showFirst);
position.addEventListener("click", showPosition);
deleted.addEventListener("click", deleteWords);

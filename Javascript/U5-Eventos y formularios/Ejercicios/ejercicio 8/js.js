let area = document.getElementById("areaTexto");
area.addEventListener("input", event => {
  let caracteresMaximos = 5;
  if (event.target.value.length > caracteresMaximos) {
    event.target.value = area.value.substring(0, caracteresMaximos);
  }
})


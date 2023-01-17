let area = document.getElementById("areaTexto");
area.addEventListener("input", event => {
  let CaracteresMaximos = 30;
  if (area.value.length > CaracteresMaximos) {
    area.value = area.value.substring(0, CaracteresMaximos);
  }
})


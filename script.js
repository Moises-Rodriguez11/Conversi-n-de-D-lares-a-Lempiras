let lempiras = 24;
let dolares = 100;

var conversion = lempiras * dolares;

let resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML = `Su conversión es: Lps. ${conversion.toFixed(2)}`;
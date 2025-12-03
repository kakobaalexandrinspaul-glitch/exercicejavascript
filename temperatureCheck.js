const temperature = parseFloat(prompt("Entrez la température en °C :"));

if (temperature < 0) {
    console.log("Il gèle");
} else if (temperature <= 15) {
    console.log("Froid");
} else if (temperature <= 25) {
    console.log("Agréable");
} else if (temperature <= 35) {
    console.log("Chaud");
} else {
    console.log("Canicule");
}
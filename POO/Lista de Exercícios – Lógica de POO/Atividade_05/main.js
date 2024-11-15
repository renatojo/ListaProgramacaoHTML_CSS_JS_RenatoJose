import Filmeoteca from "./Classes/Filmeoteca.js";

let minhaFilmeoteca = new Filmeoteca("Coringa: Delírio a Dois", "naosei", 2024);
let minhaFilmeoteca2 = new Filmeoteca("Madagascar 3", "naosei", 2012);

console.log(minhaFilmeoteca.Lancado5anos());
console.log(minhaFilmeoteca2.Lancado5anos());
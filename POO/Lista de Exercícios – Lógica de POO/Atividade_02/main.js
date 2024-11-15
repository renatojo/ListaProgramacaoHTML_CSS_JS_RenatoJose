import Pessoa from "./Classes/Pessoa.js";
import Carro from "./Classes/Carro.js";

let minhaPessoa = new Pessoa("Renato", 16);
let meuCarro = new Carro(minhaPessoa, "Corolla", "Cinza", 2008, "Toyota", 16, "Gasolina comum", 55, 100);

console.log(meuCarro.info());
console.log(meuCarro.acelerar());
console.log(meuCarro.acelerar());
console.log(meuCarro.acelerar());
console.log(meuCarro.acelerar());
console.log(meuCarro.freiar());
console.log(meuCarro.abastecer());
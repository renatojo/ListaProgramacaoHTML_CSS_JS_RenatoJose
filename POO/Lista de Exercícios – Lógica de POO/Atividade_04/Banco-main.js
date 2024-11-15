import ContaBancaria from "./Classes/ContaBancaria.js";

let MinhaConta = new ContaBancaria("Renato", 300, 1098622, 1234);

console.log(MinhaConta.depositar(200));
console.log(MinhaConta.sacar(200));
console.log(MinhaConta.sacar(1000));
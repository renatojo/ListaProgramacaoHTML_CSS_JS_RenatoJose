import Pessoa from "./Pessoa.js";

export default class Carro {
    constructor(dono, modelo, cor, ano, marca, consumo, tipoConbustivel, capacidadeCombustivel, kmRodados) {
        this.dono = new Pessoa(dono.nome, dono.idade);
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.consumo = consumo;
        this.tipoConbustivel = tipoConbustivel;
        this.capacidadeCombustivel = capacidadeCombustivel;
        this.kmRodados = kmRodados;
        this.velocidade = 0;
    }

    info() {
        console.log(`As informações do carro são:\n
            Modelo: ${this.modelo}\n
            Cor: ${this.cor}\n
            Ano: ${this.ano}\n
            Marca: ${this.marca}\n
            Consumo: ${this.consumo} km/l\n
            Tipo de combustivel: ${this.tipoConbustivel}\n
            Capacidade do combustivel: ${this.capacidadeCombustivel} litros\n
            Kilometragem rodada: ${this.kmRodados} km\n
            Velocidade: ${this.velocidade} km/h`);
    }

    capacidadeTotalCombustivel = this.capacidadeCombustivel

    acelerar() {
        if (this.capacidadeCombustivel > 0) {
            this.velocidade++;
            this.capacidadeCombustivel -= (this.kmRodados / this.consumo);
            console.log(`Velocidade do carro: ${this.velocidade} km/h`);
            console.log(`A capavidade do combustivel: ${this.capacidadeCombustivel}`)
        } else {
            console.log("Combustivel insuficiente para acelerar o carro!");
        }
    }

    freiar(){
        while(this.velocidade > 0) {
            this.velocidade--;
            console.log(`Velocidade do carro: ${this.velocidade} km/h`);
        }
    }

    abastecer(){
        this.capacidadeCombustivel = this.capacidadeTotalCombustivel
        console.log("Combustivel abastecido!")  
    }




}
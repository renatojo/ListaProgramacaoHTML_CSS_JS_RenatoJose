import Pessoa from "./pessoa.js";

export default class Carro {
    constructor(dono, cor, ano, marca, modelo, consumo, tipcombustivel, combustivel) {
        this.dono = new Pessoa(dono.nome, dono.idade);
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.consumo = consumo;
        this.tipcombustivel = tipcombustivel;
        this.combustivel = 0;
        this.kmRodados = 0;
        this.velocidade = 0;

    };

    info(){
        return `Carro: ${this.modelo} | ${this.ano} | ${this.marca}; \n 
        Dono: ${this.dono.info()}; \n
        Tipo de combustível: ${this.combustivel}; \n
        Consumo médio de: ${this.consumo}; \n
        ` 
    }

    abastecer(valor){
        this.combustivel += valor;
    }

    acelerar(){
        if (this.combustivel > 0) {
            this.combustivel++;
            this.combustivel -= this.consumo;
            console.log(`O carro está acelerando a ${this.velocidade} km\n `)
        } else {
            console.log(`Combustivel insuficiente para propulsão do motor`)
        }
    }

    freiar(){
        if()
    }

}
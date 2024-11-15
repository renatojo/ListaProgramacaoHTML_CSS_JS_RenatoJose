export default class ContaBancaria {
    constructor(titular, saldo, numeroConta, senha) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
        this.senha = senha;
    }

    depositar(ValorDepositar) {
        console.log(`Saldo atual: ${this.saldo += ValorDepositar}`)
    }

    sacar(ValorSacar) {
        if(this.saldo >= ValorSacar){
            console.log(`Saldo atual: ${this.saldo -= ValorSacar}`)
        } else {
            console.log("Saldo insuficiente!")
        }
    }

    
}
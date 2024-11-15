export default class Filmeoteca{
    constructor(titulo, diretor, anoLancamento){
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.anoAtual = 2024;
    }

    Lancado5anos(){
        if(this.anoAtual - this.anoLancamento > 5){
            return console.log(`O filme ${this.titulo} não foi lançado nos ultimos 5 anos`);
        } else {
            return console.log(`O filme ${this.titulo} foi lançado dentro dos ultimos 5 anos`);
        }
    }
}
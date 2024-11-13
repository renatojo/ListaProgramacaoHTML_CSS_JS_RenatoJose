import Produto from "./Produto.js";
import Carrinho from "./Carrinho.js";
export default class LojaOnline {

    produtos = [
        new Produto('Tênis',200),
        new Produto('Calça',200),
        new Produto('Relógio',200),
        new Produto('Blusa',200)
    ];

    carrinho = new Carrinho();

    constructor() {
        this.soma = 0;
    }

    adicionarAoCarrinho(produto) {
        this.carrinho.adicionar(produto);
        this.soma += produto.preco;
    }

}
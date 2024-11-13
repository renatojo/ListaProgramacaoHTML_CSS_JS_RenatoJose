export default class Carrinho{
    constructor(produtpos){
        this.produtos = [];
    }
    
    adicionar(produto){
        this.produtos.push(produto);
    }

    total(){
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].preco  
        }
        return total;
    }
}
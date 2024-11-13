import LojaOnline from "./Classes/LojaOnline.js";


const minhaLoja = new LojaOnline();

console.log(minhaLoja.produtos)

minhaLoja.produtos.forEach(produto => {
    console.log("Produto: ", produto.nome, "Valor:", produto.preco)
    minhaLoja.adicionarAoCarrinho(produto);
})

console.log("Carrinho: ", minhaLoja.carrinho)
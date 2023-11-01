"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./model/produto");
const CarrinhoDeCompra_1 = require("./model/CarrinhoDeCompra");
const produto1 = new produto_1.Produto(`meia`, 12.50);
const produto2 = new produto_1.Produto(`camiseta`, 62.75);
const produto3 = new produto_1.Produto(`bermuda`, 50.48);
const produto4 = new produto_1.Produto(`calça`, 150.59);
const produto5 = new produto_1.Produto(`noné`, 3.99);
const CarrinhoDeCompras = new CarrinhoDeCompra_1.CarrinhoDeCompra();
CarrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${CarrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${CarrinhoDeCompras.valorTotal()}`);
//# sourceMappingURL=main.js.map
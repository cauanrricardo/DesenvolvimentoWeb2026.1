const cliente = { nome: "Ana Silva", cpf: "111.222.333-44", cep: "00000-000" };
const entrega = { frete: 15.0, cep: "63900-000" };
const estoqueLocal = ["Notebook", "Mouse"]; // [cite: 54]
const estoqueParceiro = ["Teclado Mecânico", "Monitor"];

const todosProdutos = [...estoqueLocal, ...estoqueParceiro];

const resumoPedido = { ...cliente, ...entrega };

const gerarRecibo = (pedido, produtos) => {
  return `O cliente ${pedido.nome} receberá ${produtos.length} itens no CEP ${pedido.cep}`;
};

console.log("Todos os Produtos:", todosProdutos);
console.log("Resumo do Pedido:", resumoPedido);
console.log("Recibo:", gerarRecibo(resumoPedido, todosProdutos));

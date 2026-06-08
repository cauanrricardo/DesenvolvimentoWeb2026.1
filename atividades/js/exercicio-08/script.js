const calcularDesconto = (preco, desconto) => {
  const valorDesconto = (desconto / 100) * preco;
  const resultado = preco - valorDesconto;
  return resultado;
};
console.log(calcularDesconto(100, 10));

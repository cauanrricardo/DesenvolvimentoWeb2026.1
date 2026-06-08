class ContaCorrente {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  get saldo() {
    return `R$ ${this.#saldo.toFixed(2)}`;
  }

  set saldo(novoValor) {
    if (novoValor >= 0) {
      this.#saldo = novoValor;
    } else {
      console.error("Erro: O valor do saldo deve ser positivo.");
    }
  }
}

const minhaConta = new ContaCorrente("Alexandre", 500);
console.log(minhaConta.saldo);

minhaConta.saldo = 750.5;
console.log(minhaConta.saldo);

minhaConta.saldo = -100;

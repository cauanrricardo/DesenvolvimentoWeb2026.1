class Animal {
  constructor(nome, tutor) {
    this._nome = nome;
    this._tutor = tutor;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  get tutor() {
    return this._tutor;
  }

  set tutor(novoTutor) {
    this._tutor = novoTutor;
  }

  emitirSom() {
    console.log("Som genérico de animal");
  }

  comer() {
    console.log(`${this._nome} está comendo.`);
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au au");
  }
}

class Pato extends Animal {
  emitirSom() {
    console.log("Quack");
  }
}

// 2. Instanciação e Teste [cite: 9, 13]
const meuCachorro = new Cachorro("Mel", "Carlos");
console.log(`Animal: ${meuCachorro.nome} | Tutor: ${meuCachorro.tutor}`);
meuCachorro.emitirSom();
meuCachorro.comer();

const meuGato = new Gato("Oliver", "Mariana");
meuGato.emitirSom();

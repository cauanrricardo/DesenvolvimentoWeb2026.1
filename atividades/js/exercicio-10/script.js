class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
  verificarSituacao() {
    if (this.nota >= 7) {
      console.log(`${this.nome} : Aprovado com nota:  ${this.nota}`);
    } else {
      console.log(`${this.nome} : Reprovado com nota:  ${this.nota}`);
    }
  }
}
const aluno = new Aluno("Cauan", 7.1);
aluno.verificarSituacao();

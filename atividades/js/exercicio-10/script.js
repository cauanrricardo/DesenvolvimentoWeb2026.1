class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
  verificarSituacao() {
    if (this.nota >= 7) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado");
    }
  }
}
const aluno = new Aluno("Cauan", 7.1);
aluno.verificarSituacao();

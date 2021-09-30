// CTD - CHECKPOINT 3
// IAGO MACIEL MENDES (TURMA 2 / NOITE)

// Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
// Crie um construtor para ele e importe-o como o módulo aluno.

// Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

// Objeto construtor
function Aluno(nome, quantidadeFaltas, notas) {
  this.nome = nome;
  this.quantidadeFaltas = quantidadeFaltas;
  this.notas = notas;
  (this.calMedia = function () {
    let totalMedia = 0;
    for (let nota of this.notas) {
      totalMedia += nota;
    }
    let mediaFinal = totalMedia / notas.length;
    return mediaFinal.toFixed(2);
  }),
    (this.addFalta = function () {
      this.quantidadeFaltas += 1;
    });
}

let aluno1 = new Aluno("Norah Jones", 0, [10, 8, 7]);
let aluno2 = new Aluno("John Mayer", 2, [8, 5, 7]);
let aluno3 = new Aluno("Justin Bieber", 7, [8, 10, 10]);
let aluno4 = new Aluno("Taylor Swift", 0, [10, 10, 9]);

let grupoAlunos = [aluno1, aluno2, aluno3, aluno4];

module.exports = {
  ObjAluno: Aluno,
  ListaAlunos: grupoAlunos,
};

// ------ testes ✨ -----
// console.log(grupoAlunos);
// let alunoExtra = new Aluno ("Iago Maciel", 0, [10, 8, 7])
// console.log(alunoExtra.calMedia())
// console.log(alunoExtra.addFalta())
// console.log(alunoExtra)
// console.log(alunoExtra.addFalta())
// console.log(alunoExtra)
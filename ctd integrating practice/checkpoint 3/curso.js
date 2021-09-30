// Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
// curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
// estudantes (um array composto pelos alunos criados no passo 1).

// Passo 4
// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
// chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
// propriedade lista de estudantes do objeto curso.

// Passo 5
// Crie um método para o objeto curso que receba um aluno (como parâmetro) e
// retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
// aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
// faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
// aprovação.

const { ObjAluno } = require("./aluno");
let aluno = require("./aluno");

let curso = {
  nomeDoCurso: "Certified Tech Developer",
  notaAprovacao: 8,
  faltasMaximas: 5,
  listaEstudantes: aluno.ListaAlunos,
  addAluno: function () {
    aluno.ListaAlunos.push(new ObjAluno("Alicia Keys", 1, [8, 8, 10]));
  },
  boletimAluno: function (aluno) {
    if (
      curso.listaEstudantes[aluno].calMedia() >= this.notaAprovacao &&
      curso.listaEstudantes[aluno].quantidadeFaltas < this.faltasMaximas
    ) {
      return (
        true +
        "_Aprovado com nota acima da média e quantidade de faltas menor que o limite ✅🤓"
      );
    } else if (
      curso.listaEstudantes[aluno].calMedia() >= this.notaAprovacao * 1.1 &&
      curso.listaEstudantes[aluno].quantidadeFaltas >= this.faltasMaximas
    ) {
      return (
        true +
        "_Aprovado com nota acima da média + 10% [compensação limite de faltas atingido] ✅👀"
      );
    } else {
      return false + "_Reprovado ⛔😢";
    }
  },
  boletimGeral: function(){
      for(let i = 0; i < curso.listaEstudantes.length; i++ ){

        console.log(curso.listaEstudantes[i].nome + ' => ' + this.boletimAluno(i))
      }
  }
};

// ------ testes ✨ -----
// Passo 4
// console.log(curso.addAluno())

// Passo 5
// console.log(curso.boletimAluno(1))

// Passo 6
// console.log(curso.boletimGeral());

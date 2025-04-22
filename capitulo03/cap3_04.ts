const aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};

for(let dado in aluno){
    console.log(`${dado}:${aluno[dado]}`);
}
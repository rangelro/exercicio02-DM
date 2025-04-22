
type Aluno={
    nome: string;
    notas:number[];
    frequencia:number;

}

let aluno: Aluno = {
    nome:'Rangel',
    notas:[5,6,7],
    frequencia:75
}

function verificarAprovacao(nome:Aluno,notas:Aluno,frequencia:Aluno){
    let media:number = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2])/3;

    if (aluno.frequencia >= 75){
        if(media>=7){
            console.log('Aprovado');
        }else if(media >=5 && media<7){
            console.log('Recuperação');
        }else{
            console.log('Reprovado por nota');
        }
    }else{
        console.log("Reprovado por frequencia");
    }
}

console.log(verificarAprovacao(aluno));
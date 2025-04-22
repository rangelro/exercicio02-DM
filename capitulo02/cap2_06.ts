

let nota:number = 10;

function testarAprovacao(nota:number){
    if(nota >= 7){
        console.log("Aprovado");
    }else if(nota>=5 && nota<=6.9){
        console.log("Recuperação");
    }else{
        console.log("Reprovado");
    }
}

console.log(testarAprovacao(nota));
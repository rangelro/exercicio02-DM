
let idade: number = 18;

function obrigatoriedadeVotar(idade:number){
    if (idade < 16){
        console.log("Não vota");
    }else if(idade == 16 || idade == 17 || idade>70){
        console.log("Voto facultativo");
    }else{
        console.log("Voto obrigatorio");
    }
}


console.log(obrigatoriedadeVotar(idade));


function faixaEtaria(idade:number){
    if (idade < 12){
        console.log(`Criança`)
    }else if(idade>=12 && idade<=17){
        console.log(`Adolescente`)
    }else{
        console.log(`Adulto`)
    }
}

const idade: number = 17;

console.log(faixaEtaria(idade));
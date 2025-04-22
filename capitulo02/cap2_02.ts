
function parOuImpar(numero:number){
    if(numero%2==0){
        return `Par`;
    }else{
        return `Ímpar`;
    }
}

let numero: number = 5;

console.log(parOuImpar(numero));
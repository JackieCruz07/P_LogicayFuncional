//generar numeros primos con funcion imperativa
const primoNumero=num=>{
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }

    return true;
}

//Funcion lazy
function* generarPrimos(){
    let eval=2;
    while(true){
        if(primoNumero(eval)) 
            yield eval;{
        }
        eval++;
    }
}
//Uso de la funcion lazy
const numerosPrimos=generarPrimos();

console.log("Primo 1: ", numerosPrimos.next().value);
console.log("Primo 2: ", numerosPrimos.next().value);
console.log("Primo 3: ", numerosPrimos.next().value);
console.log("Primo 4: ", numerosPrimos.next().value);
console.log("Primo 5: ", numerosPrimos.next().value);

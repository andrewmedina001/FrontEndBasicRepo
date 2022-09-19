
//  confirmando las diferencias entre let y var
    // var no tiene limites de ambitos
        // perjudicial para la memoria por que no se destruye la variabke creada
    // let en ese aspecto si se destruye la variable
for(let i=0;i<10;i++){
    console.log(i)
}
console.log(`Hola numero 10 = ${i}`)
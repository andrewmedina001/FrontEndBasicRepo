let arr=["it01","it02","it03"]
let[item01,item02]=arr
// let[...item02]=arr   //copia todo
// console.log("item01:",item01)
// console.log("item02:",item02)

let d01={
    name:"Andrew",
    age:24,
    add:{
        adr:"ASA",
        univ:"UCSP"
    }
}

let {name,...aditional}=d01
console.log(aditional)

const describe=({name,lastname,age,city})=>{
    return `Bonjour je m'apelle  ${name}, me apellido est ${lastname}, j'a ${age} ans et je suis du ${city}.`
}

let person01={
    name:'Andrew',
    lastname:'Medina',
    age:24,
    city:'Arequipa'
}
let person02=person01
let person03={...person02,consitence:"Heavy",ages:9}
console.table(person02)
person02.age=20
console.table(person01)
console.table(person03)
// console.log(describe(person01))
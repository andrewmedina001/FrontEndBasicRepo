class Person{
    Name;
    Lastname;
    Gmail;
    Edad;
    constructor(name,lastname,gmail,edad){
        this.Name=name;
        this.Lastname=lastname;
        this.Gmail=gmail;
        this.Edad=edad;
    }
    getName(){
        console.log(`The name is ${this.Name}.`)
    }
}
class PersonImportant extends Person{
    constructor(name,lastname,gmail,edad,rama){
        super(name,lastname,gmail,edad)
        this.Rama=rama
    }
}
let person03=new PersonImportant("Michael","Valenzuela Castañeda","michaelvalenzuelaAgmail.com",30,"computer")
console.table(person03)
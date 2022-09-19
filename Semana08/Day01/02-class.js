// let-var-const

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
let person01=new Person("Carlos","Villata Bonavena","carlosvillalta@gmail.com",25);
console.table(person01)
person01.getName()
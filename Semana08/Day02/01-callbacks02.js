const alumnsDB=["name01","name02","name03"]
// function01
const searchAlumn=(name)=>{
    let alumnFound=null;
    setTimeout(()=>{
        for(let i=0;i<alumnsDB.length;i++){
            if(alumnsDB[i]==name){
                alumnFound=true
                console.log("lo encontro")
            }
        }
    },5000)
    return alumnFound
}

console.log(searchAlumn("name03"))
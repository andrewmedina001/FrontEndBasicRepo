const searchSomething=(name,callback)=>{
    console.log("one")
    console.log("two")
    console.log("three")
    console.log("four")
    callback(`txtConstSearch ${name}`)
}

searchSomething("Javier",(text)=>{
    console.log(`txtSearch ${text}`)
})
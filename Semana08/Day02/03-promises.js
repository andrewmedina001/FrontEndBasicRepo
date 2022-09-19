const step01=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false)    resolve("Successfully step 01 after 5 seconds")
            else    reject("Something reject in step 01")
        },5000)
    })
}
// console.log(step01()) //result -> promise pendingvc 
step01()
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
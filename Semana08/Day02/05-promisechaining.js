const step01=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(1===1)    resolve("Succesfully Step 01")
            else        reject("Reject in step 01")
        },3000)
    })
}
const step02=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(2===1)    resolve("Succesfully Step 02")
            else        reject("Reject in step 02")
        },3000)
    })
}
const step03=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true)    resolve("Succesfully Step 03")
            else        reject("Reject in step 03")
        },3000)
    })
}
step01()
.then((resultStep01)=>{
    console.log(resultStep01)
    return step02()
})
.then((resultStep02)=>{
    console.log(resultStep02)
    return step03()
})
.then((resultStep03)=>{
    console.log(resultStep03)
})
.catch((txtError)=>{
    console.log(txtError)
    console.log("Averigua el error")
})
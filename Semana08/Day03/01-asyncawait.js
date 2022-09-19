// const getData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(1===1)   resolve("Seuccessfully request Get")
//             else        reject("Reject in Get Request Data")
//         },5000)
//     })
// }

// const getData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(1===1)   resolve("Seuccessfully request Get02")
//             else        reject("Reject in Get Request Data02")
//         })
//     })
// }

// getData()
// .then((result)=>{
//     console.log(result)
//     return getData02()
// })
// .then((result02)=>{
//     console.log(result02)
// })
// .catch((error)=>{
//     console.log(error)
// })

// const getData=async()=> {
//     return  "Successfull get data";
// }
const getData=async()=>{
    return "getDataSuccess"
    // throw "getData not success"
}
// getData()
// .then((resultgetData)=>{
//     console.log(resultgetData)
// })
// .catch((error)=>{
//     console.log(error)
// })

const getData02=async()=>{
    try{
        let a=await getData()
        console.log(a)
        // return "success02"
        throw "not success02"
    }catch(e){
        console.log(e)
    }
}
getData02()
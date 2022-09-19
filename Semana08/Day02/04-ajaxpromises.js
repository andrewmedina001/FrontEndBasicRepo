let cartero=new XMLHttpRequest();
const getData=()=>{
    return new Promise((resolve,reject)=>{
        cartero.addEventListener("readystatechange",()=>{
            console.log("En state ->",cartero.readyState);
            if(cartero.readyState===4)
                resolve(cartero.responseText)
            else    reject("Reject in GetData")
        })
    cartero.open("GET","https://reqres.in/api/users?page=2")
    cartero.send();
    })
}
getData()
.then((result)=>{
    console.log(JSON.parse(result))
})
.catch((error)=>{
    console.log(error)
})
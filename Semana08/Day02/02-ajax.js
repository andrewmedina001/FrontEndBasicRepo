// let cartero=new XMLHttpRequest();
// cartero.addEventListener("readystatechange",()=>{
//     console.log("doing something",cartero.readyState)
// })
// cartero.open("GET","https://reqres.in/api/users?page=2")
// cartero.send()
let cartero=new XMLHttpRequest();
getData=((homework)=>{
    cartero.addEventListener("readystatechange",()=>{
        console.log("En readystate->",cartero.readyState);
        if(cartero.readyState===4){
            console.log(cartero.responseText);
            homework(cartero.responseText);
        }
    })
    cartero.open("GET","https://reqres.in/api/users?page=2");
    cartero.send();
})

getData((Data)=>{
    let dataConverted=JSON.parse(Data)
    console.log(dataConverted)
})
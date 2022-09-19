// fetch("https://reqres.in/api/users?page=2")
// .then((r)=> {
    
//     // r.json()
// })
// .then((d)=> console.log(d))


        // Other chose
// const n10=async()=>{
//     let rr=Math.random()*(10-3)+3;
//     return rr;
// }
// const n111=async()=>{
//     let rr=Math.random()*(10-3)+3;
//     return rr;
// }
// const n=async(min,max)=>{
//     min=Math.ceil(min)
//     max=Math.floor(max)
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// n(5,3)
// .then((r)=>{
//     console.log(r)
// })
// .catch((e)=>{
//     console.log(e)
// })



        // Other
// fetch("https://63280fbf5731f3db99633fab.mockapi.io/products/1")
// .then((r)=>{
//     return r.json()
// })
// .then((r1)=>{
//     console.log(r1)
// })
// .catch((e)=>{
//     console.log(e)
// })

let np={
    p__name: "p__name A",
    p_desc: "p_desc A",
    p_price: 1099,
    p_img: "http://loremflickr.com/640/480/fashion"
}

let c={
    'method':'POST',
    'headers':{
        'Content-Type':'application/json'
    },
    'body':JSON.stringify(np)
}

fetch("https://63280fbf5731f3db99633fab.mockapi.io/products",c)
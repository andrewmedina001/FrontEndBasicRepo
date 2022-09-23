const axios=require("axios");
axios.get("https://63280fbf5731f3db99633fab.mockapi.io/products")
.then((rpta)=>{
    console.log(rpta.data)
})
.catch((error)=>{
    console.log(error)
})
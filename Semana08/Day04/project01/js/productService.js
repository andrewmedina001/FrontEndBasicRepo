const url="https://63280fbf5731f3db99633fab.mockapi.io/products"
const getProducts=async()=>{
    try{
        const rpta=await fetch(url)
        const data=await rpta.json()
        return data
    }catch(error){  
        throw error;
    }
}

export {
    getProducts
}
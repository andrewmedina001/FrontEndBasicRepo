const url="https://63280fbf5731f3db99633fab.mockapi.io/products"
const getProducts=async()=>{
    // try{
    //     const rpta=await fetch(url)
    //     const data=await rpta.json()
    //     return data;
    // }catch(error){  
    //     throw error;
    // }
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((rpta)=>{
            return rpta.json()
        }).then((data)=>{
            resolve (data)
        }).catch((error)=>{
            reject(error)
        })
    })
}

const createProduct=async(objProd)=>{
    const config={
        headers:{'Content-Type':'application/json'},
        method:'POST',
        body:JSON.stringify(objProd)
    }
    try{
        const rpta=await fetch(url,config)
        const data=await rpta.json()
        return data
    }catch(error){
        throw error
    }
}

const deleteProduct=async({id})=>{
    const config={
        headers:{'Content-Type':'application/json'},
        method:'DELETE'
    }
    try{
        const rpta=await fetch(url+"/"+`${id}`,config)
        const data=await rpta.json()
        return data
    }catch(error){
        throw error
    }
}

export {
    getProducts,
    createProduct,
    deleteProduct
}
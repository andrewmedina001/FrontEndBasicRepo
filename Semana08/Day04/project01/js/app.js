import { getProducts,createProduct,deleteProduct } from "./productService.js";
import { drawProducts } from "./interface.js";

const obtainProducts=async()=>{
    try{
        const products=await getProducts();
        drawProducts(products)
    }catch(error){
        console.log("Ocurrio un error al obtener los datos.")
    }
     
    // 
    // console.log(products)
    
}
obtainProducts();
// const draw=async()=>{
    
let np={
    id:"18"
}

// const addProduct=async()=>{
//     const npp=await createProduct(np)
//     console.log(npp)
// }

const eliminateProduct=async()=>{
    const rpta=await deleteProduct(np)
    console.log(rpta)
}
// eliminateProduct()

// addProduct()

// }
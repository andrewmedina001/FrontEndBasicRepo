import { getProducts,createProduct,deleteProduct } from "./productService.js";
import { drawProducts } from "./interface.js";

const btnCreate=document.getElementById("btnCreate");
const modalCreate=document.getElementById("modalCreate")
const bsModalCreate=new bootstrap.Modal(modalCreate)
const formCreate=document.getElementById("formCreate")

const obtainProducts=async()=>{
    try{
        const products=await getProducts();
        drawProducts(products)
    }catch(error){
        console.log("Ocurrio un error al obtener los datos.")
    }
}
obtainProducts();

btnCreate.addEventListener("click",()=>{
    bsModalCreate.show()
})
// Le indicamos que sea asincrono pq tiene q esperar la rpta del fetch
formCreate.addEventListener("submit",async(event01)=>{
    //prevent default <- para que no vuelva a recargar la pagina
    event01.preventDefault();
    // get values of input
    const newProduct={
        p_name:formCreate.p_name.value,
        p_price:formCreate.p_price.value,
        p_desc:formCreate.p_desc.value
    }
    // Al parecer el valor de la URL de la imagen la añade por default el MockAPI
    try{
        await createProduct(newProduct)
        formCreate.reset()
        bsModalCreate.hide()
        obtainProducts()
        Swal.fire({
            icon:'success',
            title:'Éxito',
            text:'Successfull Created Product'
        })
    }catch(error){
        alert("Ocurrio un error al crear el product.")
    }
})
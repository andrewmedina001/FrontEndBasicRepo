const drawProducts=(arrProducts)=>{
    const divProducts=document.getElementById("divproducts")
    let contentProducts=''  // store the html generated a partir of arrProducts
    arrProducts.forEach(({id,p_name,p_desc,p_price,p_img})=>{
        let cardProduct=
            `
                <div class="col-lg-3 col-sm-12">
                    <div class="card mb-2">
                        <img src="${p_img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${p_name}</h5>
                            <p class="card-text">${p_desc}</p>
                            <p class="card-text">$/  ${p_price}</p>
                            <button 
                                href="#" 
                                class="btn btn-primary" 
                                data-id="${id}"
                                >
                                AddBTN
                            </button>
                        </div>
                    </div>
                </div>
            `
        contentProducts+=cardProduct;
    })
    divProducts.innerHTML=contentProducts;
}
export{
    drawProducts
}
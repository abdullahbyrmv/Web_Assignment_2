let textInput = document.querySelector("#search_bar");

function searchByTitle(){
    const searchBoxValue = document.getElementById("search_bar").value.toLowerCase();
    const products = document.getElementById("container");
    const allProducts = document.querySelectorAll(".products");
    const productTitle = products.getElementsByTagName("h2");

    for(let i = 0 ; i < productTitle.length ; i++){
        let cmp = allProducts[i].getElementsByTagName('h2')[0];
        if(cmp != null || cmp != undefined){
            let textValue = cmp.textContent || cmp.innerHTML;
            if(textValue.toLowerCase().includes(searchBoxValue)){
                allProducts[i].style.display = "";
            }
            else{
                allProducts[i].style.display="none";
            }
        }
    }
}

textInput.addEventListener('keyup',searchByTitle);

const url = 'https://dummyjson.com/products';

displayData();

async function displayData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let brandName = document.querySelector(".brand");
    let category = document.querySelector(".category");
    let description = document.querySelector(".description");
    let price = document.querySelector(".price");
    let discountPercentage = document.querySelector(".discountPercentage");
    let image = document.querySelector(".image");


    brandName.innerHTML = "<b>Brand: </b> " + data.products[0].brand;
    category.innerHTML = "<b>Category: </b>" + data.products[0].category;
    description.innerHTML = "<b>Description: </b>" + data.products[0].description;
    price.innerHTML = "<b>Price: </b>" + data.products[0].price  + " $";
    discountPercentage.innerHTML = "<b>Discount Percentage: </b>" + data.products[0].discountPercentage + " %";
    image.setAttribute("src",`${data.products[0].images[0]}`);
}

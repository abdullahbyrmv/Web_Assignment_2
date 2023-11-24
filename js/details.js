document.addEventListener("DOMContentLoaded",function(){

    const URL = new URLSearchParams(window.location.search);
    const productID = URL.get("id");

  fetch(`https://dummyjson.com/products/${productID}`)
    .then((response) => response.json())
    .then((product) => {
      const productDetailsContainer = document.getElementById("detailsContainer");
      productDetailsContainer.innerHTML = 
                `<h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discountPercentage}%</p>
                <p>Category: ${product.category}</p>
                <p>Stock: ${product.stock}</p>
                <div id="product_images"></div>`
                const galleryContainer = productDetailsContainer.querySelector("#product_images");
                product.images.forEach((images) => {
                    const img = document.createElement("img");
                    img.src = images;
                    img.alt = product.description;
                    galleryContainer.appendChild(img);
                  });
    });
}).catch((error) => {
    console.log(error.message);
});

const url = "https://dummyjson.com/products";

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

fetch(url)
  .then(handleErrors)
  .then((response) => response.json())
  .then((data) => {
    const products = data.products || [];
    const productListBlock = document.getElementById("container");
    
    products.forEach((product) => {
      const productBlock = document.createElement("div");
      productBlock.innerHTML = 
                `<h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discountPercentage}%</p>
                <p>Category: ${product.category}</p>
                <p>Description: ${product.description}</p>
                <p>Stock: ${product.stock}</p>
                <img src="${product.thumbnail}" id="image" alt="${product.title}">`
            ;
            productListBlock.appendChild(productBlock);
      document.getElementById("image").classList.add("img");
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

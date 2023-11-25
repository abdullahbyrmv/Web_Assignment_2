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
    let products;
    if (data && data.products) {
      products = data.products;
    } else {
      products = [];
    }
    displayProducts(products);
  }).catch(((error) => console.log(error)));

function displayProducts(products) {
  const productListBlock = document.getElementById("container");
  products
    .forEach((product) => {
      const productBlock = document.createElement("div");
      productBlock.classList.add("products");
      productBlock.innerHTML = `<h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Discount: ${product.discountPercentage}%</p>
                <p id="category">Category: ${product.category}</p>
                <p>Stock: ${product.stock}</p>
                <img src="${product.thumbnail}" id="image" alt="${product.title}">`;

      productBlock.addEventListener("click", () => {
        const url = `details.html?id=${product.id}`;
        window.open(url, '_blank');
      });
      productListBlock.appendChild(productBlock);
      document.getElementById("image").classList.add("img");
    })
}

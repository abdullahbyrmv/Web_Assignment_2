const url = "https://dummyjson.com/products/?limit=100";
let products = [];

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      products = data.products;
      const textInput = document.querySelector("#search_bar");
      const categoryInput = document.querySelector("#category");

      const categories = [];

      for (const product of products) {
        if (categories.includes(product.category) === false) {
          categories.push(product.category);
        }
      }

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const categoryOption = document.createElement("option");
        categoryOption.value = category.toLowerCase();
        categoryOption.text = category;
        categoryInput.appendChild(categoryOption);
      }

      categoryInput.addEventListener("change", search);
      textInput.addEventListener("keyup", search);
      displayProducts(products);
    })
    .catch((error) => console.log(error));
});

function displayProducts(products) {
  const productListBlock = document.querySelector(".container");
  productListBlock.innerHTML = "";
  products.forEach((product) => {
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
      window.open(url, "_blank");
    });
    productListBlock.appendChild(productBlock);
    document.getElementById("image").classList.add("img");
  });
}

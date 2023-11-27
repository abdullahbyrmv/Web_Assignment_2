const productListBlock = document.querySelector(".container");

function search() {
  const textInputValue = document
    .querySelector("#search_bar")
    .value.toLowerCase();
  const categoryInputValue = document
    .querySelector("#category")
    .value.toLowerCase();

  const searchResults = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const title = product.title.toLowerCase().includes(textInputValue);
    const category = product.category.toLowerCase().includes(textInputValue);
    const description = product.description
      .toLowerCase()
      .includes(textInputValue);

    let categorySelect;

    if (categoryInputValue === "") {
      categorySelect = true;
    } else {
      categorySelect = product.category
        .toLowerCase()
        .includes(categoryInputValue);
    }

    if ((title || category || description) && categorySelect) {
      searchResults.push(product);
    }
  }
  if (searchResults.length === 0) {
    productListBlock.innerHTML = "<h2>No products found.</h2>";
    productListBlock.classList.remove("container");
    productListBlock.classList.add("search_message");
  } else {
    displayProducts(searchResults);
  }
}

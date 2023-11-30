const productListBlock = document.querySelector(".container");

function search() {
  const textInputValue = document
    .querySelector("#search_bar")
    .value.trim()
    .toLowerCase();
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
      categorySelect = product.category.toLowerCase() === categoryInputValue;
    }

    if ((title || category || description) && categorySelect) {
      searchResults.push(product);
    }
  }
  displayProducts(searchResults);
}

let currentPage = 1;
let limit = 10;

function displayPagination() {
  let begin = limit * (currentPage - 1);
  let end = limit * currentPage - 1;

  let products = document.querySelectorAll(".products");

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (i >= begin && i <= end) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
  managePagination();
}

function managePagination() {
  const total_pages = Math.ceil(
    document.querySelectorAll(".products").length / limit
  );
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";

  const maxPages = 10;
  let startPage = 1;
  let endPage = total_pages;

  if (total_pages > maxPages) {
    if (currentPage <= Math.floor(maxPages / 2) + 1) {
      endPage = maxPages;
    } else if (currentPage >= total_pages - Math.floor(maxPages / 2)) {
      startPage = total_pages - maxPages + 1;
    } else {
      startPage = currentPage - Math.floor(maxPages / 2);
      endPage = currentPage + Math.floor(maxPages / 2);
    }
  }

  function createPaginationItem(text, pageNumber, currentPage) {
    const pageItem = document.createElement("li");
    pageItem.innerText = text;
    pageItem.setAttribute("onclick", `updatePage(${pageNumber})`);

    if (pageNumber === currentPage) {
      pageItem.classList.add("active");
    }
    paginationContainer.appendChild(pageItem);
  }

  if (currentPage > 1) {
    createPaginationItem("prev", currentPage - 1, currentPage);
  }

  for (let i = startPage; i <= endPage; i++) {
    createPaginationItem(i, i, currentPage);
  }

  if (currentPage < total_pages) {
    createPaginationItem("next", currentPage + 1, currentPage);
  }
}

function updatePage(pageNumber) {
  currentPage = pageNumber;
  displayPagination();
}

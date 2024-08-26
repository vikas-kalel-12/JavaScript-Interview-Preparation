const onLoad = (function () {
  const productListing = document.getElementById("productListing");
  const sortOrder = document.getElementById("sortOrder");

  const fetchProducts = async (order = "asc") => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${order}`
      );
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  const displayProducts = (products) => {
    productListing.innerHTML = ""; // Clear previous products
    const ul = document.createElement("ul");
    ul.className = "list-container";
    ul.setAttribute("role", "list");

    if (products?.length) {
      products.forEach((product) => {
        const li = document.createElement("li");
        li.className = "list-item";
        li.setAttribute("role", "listitem");

        li.innerHTML = `
          <article>
            <figure class="img-wrapper">
              <img height="200px" width="200px" alt="${product?.title}" src="${product?.image}" />
            </figure>
            <h2>${product?.title}</h2>
            <p>${product?.description}</p>
          </article>
        `;
        ul.appendChild(li);
      });
    }
    productListing.appendChild(ul);
  };

  const handleSort = async () => {
    const products = await fetchProducts(sortOrder.value);
    displayProducts(products);
  };

  const init = async () => {
    sortOrder.addEventListener("change", handleSort);
    const products = await fetchProducts();
    displayProducts(products);
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", onLoad.init);

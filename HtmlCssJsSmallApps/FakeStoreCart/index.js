const onLoad = (function () {
  const productList = document.getElementById("productList");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/3");
      const productData = await response.json();
      return productData.products;
    } catch (err) {
      throw new Error(err);
    }
  };

  const displayProduct = (allProducts) => {
    const ul = document.createElement("ul");
    ul.className = "list-container";
    ul.setAttribute("role", "list");
    if (allProducts?.length) {
      allProducts.forEach((element) => {
        const li = document.createElement("li");
        li.setAttribute("role", "list-item");
        li.className = "list-item";
        li.innerHTML = `<figure class="img-wrapper"><img height="200px" width="200px" alt="img" src="${element?.image}" /></figure><h3>${element?.title}</h3><p>${element?.description}</p>`;
        ul.appendChild(li);
      });
    }
    productList.appendChild(ul);
  };
  const init = async () => {
    const products = await fetchProducts();
    const allProducts = await Promise.all(
      products.map((product) =>
        fetch(`https://fakestoreapi.com/products/${product.productId}`).then(
          (response) => response.json()
        )
      )
    );
    displayProduct(allProducts);
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", onLoad.init);

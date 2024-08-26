import { getProductDetail } from "./detail";

const onLoad = (function () {
  const ul = document.getElementById("product-list");

  ul.addEventListener("click", onListClick);

  function onListClick(event) {
    const li = event.target.closest(".list-item");
    if (li) {
      const productId = li.getAttribute("class")?.[0];
      window.location.href = `detail.html?id=${productId}`;
      console.log(getProductDetail());
    }
  }

  const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  const displayProducts = async (products) => {
    if (products?.length) {
      products?.forEach((element) => {
        const li = document.createElement("li");
        li.className = `${element?.id} list-item`;
        li.innerHTML = `<div  class="inner-wrapper">
          <img height="200px" width="200px" alt="" src="${element?.image}"/>
        </div>
        <h3>${element?.title}</h3>
        <h6>${element?.price}</h6>
        `;
        ul.appendChild(li);
      });
    }
  };

  const init = async () => {
    const products = await fetchAPI("https://fakestoreapi.com/products");
    displayProducts(products);
  };
  return { init };
})();
document.addEventListener("DOMContentLoaded", onLoad.init);

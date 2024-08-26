const onLoad = (function () {
  const getProductDetail = async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      return await response.json();
    } catch (err) {
      throw new Error(Err);
    }
  };

  const displayProductInDetail = (data) => {
    console.log(data, "data");
    const div = document.getElementById("product-detail");
    div.innerHTML = `<div  class="inner-wrapper">
          <img height="200px" width="200px" alt="" src="${data?.image}"/>
        </div>
        <h3>Title: ${data?.title}</h3>
        <div>Category : ${data?.category}</div>
        <p>Description : ${data?.description}</p>
        <h6>Price : ${data?.price}</h6>
        `;
  };

  const init = async () => {
    let search = window.location.search;
    search = search?.split("=")?.[1];
    const poductData = await getProductDetail(search);
    displayProductInDetail(poductData);
  };
  return { init };
})();

export const getProductDetail = () => {
  return "vikas kalel";
};
document.addEventListener("DOMContentLoaded", onLoad.init);

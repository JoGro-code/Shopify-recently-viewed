document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("/products/")) {
    var productHandle = window.location.pathname.split("/").pop();
    var viewedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    if (!viewedProducts.includes(productHandle)) {
      if (viewedProducts.length >= 5) {
        // Limitiere auf 5 Produkte
        viewedProducts.shift();
      }
      viewedProducts.push(productHandle);
      localStorage.setItem("recentlyViewed", JSON.stringify(viewedProducts));
    }
  }
});

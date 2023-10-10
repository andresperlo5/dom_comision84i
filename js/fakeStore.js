const divCards = document.getElementById("cardsFakeStore");
const products = JSON.parse(localStorage.getItem("products")) || [];
const divImgPrincipal = document.getElementById("idImg");
const prodDestacado = JSON.parse(localStorage.getItem("prodDest"));
const inputSearch = document.getElementById("idInputSearch");

if (products.length === 0) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) =>
      localStorage.setItem("products", JSON.stringify(products))
    );
}

divCards.innerHTML = products
  .map(
    (product) =>
      `
       <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
          <img
              src="${product.image}"
              class="card-img-top class-img"
              alt="..."
          />
          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
              ${product.description}
              </p>
              <a href="../html/product.html?id=${product.id}" class="btn btn-primary botonGoClass"
              >Ver Mas</a
              >
          </div>
          </div>
    </div>
       `
  )
  .join("");

divImgPrincipal.innerHTML = prodDestacado.map(
  (prod) =>
    `
<img
  src="${prod.image}"
  alt=""
  class="class-img-principal"
/>

`
);

const searchProd = (ev) => {
  const { value } = ev.target;
  const res = products.filter((prod) =>
    prod.title.toLowerCase().includes(value.toLowerCase())
  );

  res.length > 0
    ? (divCards.innerHTML = res
        .map(
          (product) =>
            `
       <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
          <img
              src="${product.image}"
              class="card-img-top class-img"
              alt="${product.description}"
          />
          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
              ${product.description}
              </p>
              <a href="../html/product.html?id=${product.id}" class="btn btn-primary botonGoClass"
              >Ver Mas</a
              >
          </div>
          </div>
    </div>
       `
        )
        .join(""))
    : (divCards.innerHTML = `<h2 class="text-center py-5">Produto no encontrado</h2>`);
};

inputSearch.addEventListener("input", searchProd);

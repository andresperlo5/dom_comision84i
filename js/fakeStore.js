const divCards = document.getElementById("cardsFakeStore");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then(
    (products) =>
      (divCards.innerHTML = products
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
        .join(""))
  );

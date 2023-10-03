const idProd = location.search.split("=")[1];
const divCard = document.getElementById("cardsFakeStore");

fetch(`https://fakestoreapi.com/products/${idProd}`)
  .then((res) => res.json())
  .then(
    (product) =>
      (divCard.innerHTML = `
             
        <div class="d-flex">
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
            <button class='btn btn-primary' onclick="addCart(${product.id})">Añadir Carrito</button>
            </div>
        </div>
          
             `)
  );

const addCart = async (id) => {
  const userExist = JSON.parse(localStorage.getItem("user"));
  const cartLs = JSON.parse(localStorage.getItem("cart")) || [];
  const filterCart = cartLs.filter((prod) => prod.id === id);

  if (userExist) {
    try {
      if (filterCart.length > 0) {
        alert("El Producto ya existe en el carrito");
      } else {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        cartLs.push(product);

        localStorage.setItem("cart", JSON.stringify(cartLs));
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    location.href = "../html/iniciar-sesion.html";
  }
};

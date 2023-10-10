const tBody = document.getElementById("tBody");
const products = JSON.parse(localStorage.getItem("products"));

tBody.innerHTML = products
  .map(
    (product) =>
      `
  <tr>
    <th scope="row">${product.id}</th>
      <td>${product.title}</td>
      <td id-price-prod=${product.id}>${product.price}</td>
     
      <td>
        <button class="btn btn-danger" onclick="deleteProd(${product.id})">Eliminar</button>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal-${product.id}">
          Editar
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal-${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${product.id}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel-${product.id}">Usuario: ${product.title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Titulo</label>
                    <input type="text" value='${product.title}' name='title' class="form-control" id="idInputTitle" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Precio</label>
                    <input type="text" value='${product.price}' name='price' class="form-control" id="idInputPrice">
                  </div>
                 
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Categoria</label>
                    <input type="text" value='${product.category}' name='category' class="form-control" id="idInputCategory">
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Descripcion</label>
                    <input type="text" value='${product.description}' name='description' class="form-control" id="idInputDescription">
                   </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Imagen</label>
                    <input type="text" value='${product.image}' name='image' class="form-control" id="idInputImage">
                 </div>
               
                  <button type="button" class="btn btn-primary" onclick='saveChangeProd(${product.id})'>Guardar Cambios</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-success" onclick="destacarProd(${product.id})">Destacar</button>
      </td>
   
  </tr>
`
  )
  .join("");

const inputTitle = document.getElementById("idInputTitle");
const inputPrice = document.getElementById("idInputPrice");
const inputCategory = document.getElementById("idInputCategory");
const inputDescription = document.getElementById("idInputDescription");
const inputImage = document.getElementById("idInputImage");

const prodDataForm = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
};

const changeValueFormProd = (ev) => {
  const { name, value } = ev.target;
  prodDataForm[name] = value;
};

const saveChangeProd = (idProd) => {
  const prodFilter = products.filter((prod) => prod.id === Number(idProd));
  const prodPosition = products.findIndex((prod) => prod.id === Number(idProd));

  const prodUpdate = {
    id: prodFilter[0].id,
    title: prodDataForm.title ? prodDataForm.title : prodFilter[0].title,
    price: prodDataForm.price ? prodDataForm.price : prodFilter[0].price,
    category: prodDataForm.category
      ? prodDataForm.category
      : prodFilter[0].category,
    description: prodDataForm.description
      ? prodDataForm.description
      : prodFilter[0].description,
    image: prodDataForm.image ? prodDataForm.image : prodFilter[0].image,
  };

  products[prodPosition] = prodUpdate;
  localStorage.setItem("products", JSON.stringify(products));
  location.reload();
};

const deleteProd = (idProd) => {
  const confirmDel = confirm(
    "Estas seguro de que quieres eliminar este producto?"
  );

  if (confirmDel) {
    const prodFilter = products.filter((prod) => prod.id !== Number(idProd));
    localStorage.setItem("products", JSON.stringify(prodFilter));
    location.reload();
  }
};

const destacarProd = (idProd) => {
  const prodDestacado = JSON.parse(localStorage.getItem("prodDest")) || [];
  const prodFilter = products.filter((prod) => prod.id === Number(idProd));

  if (prodDestacado.length > 0) {
    const confirmCambioDestacado = confirm(
      "Estas seguro de que quieres cambiar el producto destacado?"
    );

    if (confirmCambioDestacado) {
      localStorage.setItem("prodDest", JSON.stringify(prodFilter));
    }
  } else {
    localStorage.setItem("prodDest", JSON.stringify(prodFilter));
  }
};

inputTitle.addEventListener("input", changeValueFormProd);
inputPrice.addEventListener("input", changeValueFormProd);
inputCategory.addEventListener("input", changeValueFormProd);
inputDescription.addEventListener("input", changeValueFormProd);
inputImage.addEventListener("input", changeValueFormProd);

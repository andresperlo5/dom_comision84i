const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10.99,
    codigo: "ABC123",
    imagenes: [
      "https://ejemplo.com/imagen1.jpg",
      "https://ejemplo.com/imagen2.jpg",
    ],
    descripcion: "Descripción del Producto 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 15.49,
    codigo: "DEF456",
    imagenes: [
      "https://ejemplo.com/imagen3.jpg",
      "https://ejemplo.com/imagen4.jpg",
    ],
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 8.99,
    codigo: "GHI789",
    imagenes: [
      "https://ejemplo.com/imagen5.jpg",
      "https://ejemplo.com/imagen6.jpg",
    ],
    descripcion: "Descripción del Producto 3",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 12.99,
    codigo: "JKL101",
    imagenes: [
      "https://ejemplo.com/imagen7.jpg",
      "https://ejemplo.com/imagen8.jpg",
    ],
    descripcion: "Descripción del Producto 4",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 7.95,
    codigo: "MNO111",
    imagenes: [
      "https://ejemplo.com/imagen9.jpg",
      "https://ejemplo.com/imagen10.jpg",
    ],
    descripcion: "Descripción del Producto 5",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 22.99,
    codigo: "PQR222",
    imagenes: [
      "https://ejemplo.com/imagen11.jpg",
      "https://ejemplo.com/imagen12.jpg",
    ],
    descripcion: "Descripción del Producto 6",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 5.49,
    codigo: "STU333",
    imagenes: [
      "https://ejemplo.com/imagen13.jpg",
      "https://ejemplo.com/imagen14.jpg",
    ],
    descripcion: "Descripción del Producto 7",
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 18.75,
    codigo: "VWX444",
    imagenes: [
      "https://ejemplo.com/imagen15.jpg",
      "https://ejemplo.com/imagen16.jpg",
    ],
    descripcion: "Descripción del Producto 8",
  },
  {
    id: 9,
    nombre: "Producto 9",
    precio: 14.99,
    codigo: "YZA555",
    imagenes: [
      "https://ejemplo.com/imagen17.jpg",
      "https://ejemplo.com/imagen18.jpg",
    ],
    descripcion: "Descripción del Producto 9",
  },
  {
    id: 10,
    nombre: "Producto 10",
    precio: 9.99,
    codigo: "BCD666",
    imagenes: [
      "https://ejemplo.com/imagen19.jpg",
      "https://ejemplo.com/imagen20.jpg",
    ],
    descripcion: "Descripción del Producto 10",
  },
];

localStorage.setItem("productsChatGPT", JSON.stringify(productos));

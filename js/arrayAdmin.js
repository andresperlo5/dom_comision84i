const users = JSON.parse(localStorage.getItem("users")) || [];

const admins = [
  {
    id: 1,
    usuario: "andres2023",
    contrasenia: "123456789",
    login: false,
    role: "admin",
    deleted: false,
  },
  {
    id: 2,
    usuario: "maxi2023",
    contrasenia: "123456789",
    login: false,
    role: "admin",
    deleted: false,
  },
];

if (users.length === 0) {
  localStorage.setItem("users", JSON.stringify(admins));
}

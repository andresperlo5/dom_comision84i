const admins = [
  {
    id: 1,
    user: "andres2023",
    pass: "123456789",
    login: false,
    role: "admin",
    deleted: false,
  },
  {
    id: 2,
    user: "maxi2023",
    pass: "123456789",
    login: false,
    role: "admin",
    deleted: false,
  },
];

localStorage.setItem("admin", JSON.stringify(admins));

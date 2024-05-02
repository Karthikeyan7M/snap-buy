import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Anush kaanth",
    email: "anu@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nijo son",
    email: "nijo@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default Users;

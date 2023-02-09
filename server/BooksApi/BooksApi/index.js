
const express = require("express");
const app = express();
const books = require("./books");
const basketproduct = require("./basketProduct");
const users = require("./users");
const cors = require("cors");
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true,
}));

app.use("/", books);

app.use("/api/users", users)
app.use("/api/basketproduct", basketproduct);

app.listen(3000, () => {
  console.log("listening on port 3000");
});


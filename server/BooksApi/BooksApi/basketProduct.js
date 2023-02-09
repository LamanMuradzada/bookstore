const express = require("express");
const database = require("./database");
const app = express();

app.get("/", (req, res) => {
  database
    .query(
      "SELECT B.image, B.name, B.price, B.count, B.amount, B.id, BP.id as BPid FROM basket_product BP INNER JOIN books B ON BP.bookid = B.id"
    )
    .then((data) => {
      res.send(data[0]);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  database
    .query(
      "SELECT B.image, B.name, B.price, B.count, B.amount, B.id, BP.id as BPid FROM basket_product BP INNER JOIN books B ON BP.bookid = B.id WHERE BP.bookid = ?",
      id
    )
    .then((data) => {
      res.send(data[0]);
    });
});

app.post("/:id", (req, res) => {
    const id = req.params.id;
  
    database
      .query(`SELECT count(*) as Say FROM basket_product WHERE bookid= ${id}`)
      .then((rsp) => {
        const say = rsp[0][0].Say;
        if (say === 0) {
          database.query(
            "INSERT INTO basket_product (bookid) values (?)",
            id,
            (err, result) => {
              if (err) {
                return console.log(err);
              } else {
                res.send(result);
              }
            }
          );
          res.send({ result: true });
        } else {
          res.send({ result: false });
        }
      });
  });

app.delete("/:id", (req, res) => {
  database.query(
    "DELETE FROM basket_product WHERE id = ?",
    +req.params.id,
    (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = app;

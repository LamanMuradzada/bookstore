const database = require("./database");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  database.query("SELECT * FROM books").then((data) => {
    res.send(data[0]);
   });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  database.query("SELECT * FROM books WHERE id=?", id).then((data) => {
    res.send(data[0]);
  });
});


app.put("/:id", (req, res) => {
  const data = [req.body.author,req.body.price,req.body.genre,req.body.image,req.body.name,req.params.id];
  database.query("UPDATE books SET author=?,price=?,genre=?,image=?,name=? WHERE id=?",data,(error,result)=>{
    if(error){
      return console.log(error); 
    }
    else{
      res.send(result);
    }
  })
  res.send(data);
});
app.delete("/:id", (req, res) => {
 const id = req.params.id;
  database.query("DELETE FROM books WHERE id=?",id,(error,result)=>{
    if(error){
      return console.log(error);
    }
    else{
      res.send(result);
    }
  })
  res.send(id);
});





module.exports = app;

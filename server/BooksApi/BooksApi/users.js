const express = require("express");
const database = require("./database");
const app = express();

const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
  })
);

app.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const isExists = await isExistsEmail(email);

  if (isExists) {
    
    res.send({ message: "Email movcuddur!" });
    return;
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.send({ message: "Password error" });
    }
    if (name && email && password) {
      database.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, hash],
        (err, result) => {
          if (err) {
            res.send({ message: "Error" });
          } else {
            res.send(result);
          }
        }
      );
    } else {
      res.send({ message: "Datas aren't fully filled" });
    }
    res.send({ message: "Melumat daxil edildi" });
    
  });
});

app.get("/login", (req, res) => {
  if (req.session.users) {
    res.send({ loggedIn: true, users: req.session.users });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) =>{
 
    if(err){
        res.send({
            message: "Error"
        })
    }
      database.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${hashedPassword}'`).then((rsp) =>{
        console.log("response", rsp)
            if(rsp.length > 0) { 
                bcrypt.compare(hashedPassword, rsp[0].password, (error, response) =>{
                    if (response) {
                        req.session.users = rsp;
                        console.log(req.session.users);
                        res.send(rsp);
                      }
                      else {
                        res.send({
                          message: "Wrong email/password combination!"
                        });
                      }
                })
            }
         
      })
  })
  
});


async function isExistsEmail(email) {
  let say = 0;
  await database
    .query(`SELECT count(*) AS SAY FROM users WHERE email = '${email}'`)
    .then((res) => {
      say = res[0][0].SAY;
    
    });

  return say > 0;
}

module.exports = app;

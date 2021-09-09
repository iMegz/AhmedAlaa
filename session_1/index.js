const express = require("express");
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/user", (req, res) => {
  res.send(`
    <form action="/addUser" method="post">
        <input placeholder="enter your name" name="name" type="text">
        <input placeholder="enter your age" name="age" type="number">
        <input type="submit">
    </form>
  `);
});

app.post("/addUser", (req, res) => {
  const names = req.body.name;
  const age = req.body.age;

  const { name, age } = req.body;
  res.send(`Hi ${name} your age is ${age}`);
});

app.listen(3000);

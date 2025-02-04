const con=require("./connection")
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/register",(req,res)=>{
    const{name,email,password}=req.body;
    const sql='insert into users(name,email,password) values(?,?,?)'
    con.query(sql, [name, email, password], (err, result) => {
        if (err) throw err;
        res.render("success", { email });
    });
})
app.listen(3000, () => console.log("Server running on port 3000"));

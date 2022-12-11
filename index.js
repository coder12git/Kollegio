const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/books",(req,res)=>{
    res.render("books");
});

app.get("/sellBook",(req,res)=>{
    res.render("sellBook");
});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started at port ${port}`));
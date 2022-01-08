const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.use(express.static(__dirname + "/public"));
const PORT = 3000;

app.get("/", (req, res) => {
    let curretDate = new Date();
    curretDate = curretDate.toLocaleDateString();
    const articles = [
        {
            title: "Test Article",
            date: curretDate,
            description:
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo sit, voluptatum numquam maiores vel repellendus amet.",
        },
    ];
    res.render("index", { articles });
});

app.listen(PORT);
console.log("http://localhost:3000/");

const express = require("express");
const mongoose = require("mongoose");
const Document = require("./models/document");

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // used to submit form data

mongoose.connect("mongodb://localhost:27017/binHaste").then(() => console.log("monogoDB Connected!!")).catch((err) => console.log(err));

app.get("/", (req, res) => {
    const code = `Welcome to HasteBin clone!

Use the commands in the top right corner  
to create a new file to share with others.`
    res.render("codeDisplay", {
        code,
        language: 'plaintext'
    })
})

app.get("/new", (req, res) => {
    res.render("new")
})
app.post("/save", async (req, res) => {
    const value = req.body.value;
    // console.log(value);

    try {
        const document = await Document.create({ value })
        res.redirect(`/${document.id}`)
    } catch (error) {
        res.render("new", {
            value
        });
    }
});

app.get("/:id/duplicate", async (req, res) => {
    const id = req.params.id;
    try {
        const document = await Document.findById(id);
        res.render("new", { value: document.value});

    } catch (error) {
        res.redirect(`/${id}`)
    }
});

app.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const document = await Document.findById(id);
        res.render("codeDisplay", { code: document.value, id });

    } catch (error) {
        res.redirect("/")
    }
});

app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`)
})
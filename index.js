const express = require("express");
const colors = require("colors");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if(err) {
            console.log("error", err);
            res.send(`<h1> Hello Brothers </h1>`);
        } else {
            res.write(data)
            res.end()
        }
    })
})



app.listen(5000, () => {
    console.log("Hello Developer How Are You.." .red.inverse)
})
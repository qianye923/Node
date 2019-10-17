const express = require("express");
const path = require("path");
const app = express();

const url = path.join(__dirname, "./static")
app.use(express.static(url))
console.log(url)
app.listen('8091','10.32.192.33', function () {
    console.log("访问完成")
})
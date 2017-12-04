const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
let app = express()
//单
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Listen port:3000...")
});


const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
let router = require('./router')
var multer = require('multer');
let app = express()

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//注意这个顺序，应该先在前面对req进行解析，再引入router，因为解析是对router文件进行的
app.use(router);

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Listen port:3000...")
});


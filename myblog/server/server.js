const express = require('express')
const path = require('path')
const formidable = require('formidable')
const bodyParser = require('body-parser')
const session = require('express-session')
let router = require('./router')
var multer = require('multer');
let app = express()

// app.use(express.static(path.resolve(__dirname, '../dist')));

// 调用express-session中间件，connect.id过期时间设置为10分钟
app.use(session({
  secret: 'fuckyou',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000*60*1
  }
}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//注意这个顺序，应该先在前面对req进行解析，再引入router，因为解析是对router文件进行的
app.use(router);

// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../dist/index.html'))
// })
//
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    // if (req.method == 'POST') {
    //     res.send(200);
    // }
    //
    next();
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Listen port:3000...")
});


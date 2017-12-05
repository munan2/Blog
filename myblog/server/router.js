const fs = require('fs')
const path = require('path')
let express = require('express')
let db = require('./db')
let articles = require('./article')
let router = express.Router()
router.post('/saveArticle', (req, res) => {
    console.log(req.body);
    articles.save(req.body.title, req.body.date, req.body.textContent, req.body.htmlConetnt, req.body.label);
    res.send('11');
});
router.post('/getArticle', (req, res) => {
    res.info = articles.getArticle(req, res)
});

module.exports = router;
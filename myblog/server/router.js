const fs = require('fs')
const path = require('path')
let express = require('express')
let db = require('./db')
let articles = require('./article')
let router = express.Router()
router.post('/saveArticle', (req, res) => {
    articles.save(req.body);
    res.send('11');
});
router.post('/getArticle', (req, res) => {
    res.info = articles.getArticle(req, res)
});
router.post('/getOneArticle', (req, res) => {
	res.info = articles.getOneArticle(req, res);
});
router.post('/deleteArticle', (req, res) => {
	res.info = articles.deleteOneArticle(req, res);
	res.send('11');
});
router.post('/modifyArticle', (req, res) => {
	articles.update(req.body);
	res.send('11');
});
router.post('/searchArticle', (req, res) => {
	articles.searchArticle(req, res);
})

module.exports = router;
const fs = require('fs')
const path = require('path')
let express = require('express')
const db = require('./db')
let articles = require('./article')
let user = require('./user')
let router = express.Router()
router.post('/saveArticle', (req, res) => {
    articles.save(req.body);
    res.send('success save');
});
router.post('/getArticle', (req, res) => {
    res.info = articles.getArticle(req, res)
});
router.post('/getOneArticle', (req, res) => {
	res.info = articles.getOneArticle(req, res);
});
router.post('/deleteArticle', (req, res) => {
	res.info = articles.deleteOneArticle(req, res);
	res.send('success delete');
});
router.post('/modifyArticle', (req, res) => {
	articles.update(req.body);
	res.send('success modify');
});
router.post('/searchArticle', (req, res) => {
	articles.searchArticle(req, res);
});
router.post('/regist', (req, res) => {
	user.regist(req, res);
});
router.post('/checkName', (req, res) => {
	user.checkName(req, res);
});
router.post('/getUser', (req, res) => {
	user.searchUser(req, res);
});
router.post('/login', (req, res) => {
	user.checkUser(req, res);
});
router.post('/getAllUser', (req, res) => {
	user.getAllUser(req, res);
});
router.post('/deleteUser', (req, res) => {
	user.deleteUser(req, res);
})

module.exports = router;
const Mongoose = require('mongoose')
const db = require('./db')
let articleSchema = new Mongoose.Schema({
    title: {
        type: String
    },
    date:{
        type: String
    },
    textContent: {
        type: String
    },
    htmlContent: {
        type: String
    },
    label: {
        type: String
    },
    flag: {
        type: Number
    },
    name: {
        type: String
    }
});

let articleModel = db.model('article', articleSchema);
let articles = {
    save: obj => {
        let articleItem = new articleModel(obj);
        articleItem.save();
    },
    getArticle: (req, res) => {
        if (req.body.name) {
            var params = {
                flag: req.body.flag,
                name: req.body.name
            }
        } else {
           var params = {
                flag: req.body.flag
            } 
        }
        articleModel.find(params, (err, docs) => {
            res.send({
                info: docs
            })
        })
    },
    getOneArticle: (req, res) => {
        articleModel.find({
            _id: req.body.id
        }, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    info: docs
                })
            }
        })
    },
    deleteOneArticle: (req, res) => {
        articleModel.remove({
            _id: req.body.id
        }, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("用户删除成功")
            }
        });
    },
    update: obj => {
        articleModel.update({_id: obj.id}, {
            title: obj.title,
            flag: obj.flag,
            textContent: obj.textContent,
            htmlContent: obj.htmlContent,
            label: obj.label,
            date: obj.date,
            name: obj.name
        }, (err, docs) => {
                if(err) console.log(err);
                console.log('更改成功：' + docs);
        })
    },
    searchArticle: (req, res) => {
        articleModel.find({
            flag: req.body.flag,
            title: new RegExp(req.body.model)
        }, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    info: docs
                })
            }
        })
    }
}
module.exports = articles;
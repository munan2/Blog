let Mongoose = require('mongoose')
let db = require('./db')
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
    htmlConetnt: {
        type: String
    },
    label: {
        type: String
    }
});

let articleModel = db.model('article', articleSchema);
let articles = {
    save: (title, date, textContent, htmlConetnt, label) => {
        let articleItem = new articleModel({
            title: title,
            date: date,
            textContent: textContent,
            htmlConetnt: htmlConetnt,
            label: label
        });
        console.log('sdsd')
        articleItem.save();
    },
    getArticle: (req, res) => {
        articleModel.find({}, (err, docs) => {
            console.log(docs.length);
            res.send({
                info: docs
            })
        })
    }
}
module.exports = articles;
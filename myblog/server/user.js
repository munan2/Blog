let Mongoose = require('mongoose')
let db = require('./db')
let userSchema = new Mongoose.Schema({
    name: {
        type: String
    },
    pass:{
        type: String
    },
    flag: {
        type: Number
    }
});

let userModel = db.model('user', userSchema);
let _this = this;
let user = {
    regist: (req, res) => {
        userModel.find({
            name: req.body.name
        }, (err, docs) => {
            if (docs.length) {
                res.send({
                    status: 0
                })
            } else {
                let userItem = new userModel(req.body);
                userItem.save();
                res.send({
                    status: 1
                })
            }
        })
    },
    checkName: (req, res) => {
        userModel.find({
            name: req.body.name
        }, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                if (docs.length) {
                    res.send({
                        status: 0
                    })
                } else {
                    res.send({
                        status: 1
                    })
                }
            }
        })
    },
    searchUser: (req, res) => {
        userModel.find({
            name: req.body.name
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
    checkUser: (req, res) => {
        userModel.find(req.body, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                if (docs.length) {
                    res.send({
                        status: 1,
                        info: docs
                    })
                } else {
                    res.send({
                        status: 0
                    })
                }
            }
        })
    }
}
module.exports = user;
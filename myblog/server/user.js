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
    },
    img: {
        type: String
    },
    email: {
        type: String
    },
    github: {
        type: String
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
        if(req.body.name) {
            var params = {
                name: req.body.name
            }
        } else {
            var params = {
                _id: req.body.id
            }
        }
        console.log(params);
        userModel.find(params, (err, docs) => {
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
    },
    getAllUser: (req, res) => {
        userModel.find({
            flag: req.body.flag
        }, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                if (docs.length) {
                    res.send({
                        userInfo: docs
                    })
                }
            }
        })
    },
    deleteUser: (req, res) => {
        userModel.remove({
            _id: req.body.id
        }, err => {
            if (err) {
                console.log(err);
            } else {
                res.send("用户删除成功")
            }
        });
    },
    saveUserInfo: (req, res) => {
        userModel.update({_id: req.body.id}, {
            img: req.body.img,
            github: req.body.github,
            email: req.body.email,
            name: req.body.name
        }, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    status: 1
                });
            }
        })
    }
}
module.exports = user;
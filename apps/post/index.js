/**
 * Created by Administrator on 2017/6/11.
 */

var model = require('../../config/model')

const POST = model.Post
const connect =model.connect
var express = require('express')

var router = express.Router()

router.get('/',function (req, res) {
    if(req.query.offset && req.query.limit){
        POST.findAll({
            offset:req.query.offset,
            limit:req.query.limit
        }).then(function (post) {
            res.send(post)
        })
    }else {
        POST.findAll().then(function (post) {

            res.send(post)
        })
    }
})

router.get('/detail',function (req,res) {
    connect.query('SELECT * FROM posts JOIN users WHERE posts.userId = users.id',{model:POST})
        .then(function (results) {

            var json = []
            for(var i=0;i<results.length;i++){
                var obj = results[i].dataValues
                obj.user = {}
                obj.user.username = obj.username
                obj.user.nickname = obj.nickname
                obj.user.id = obj.userId
                obj.user.logo = obj.logo

                delete obj.username
                delete obj.nickname
                delete obj.userId
                delete obj.logo
                json.push(obj)
            }

            res.send(json)
        })
})

module.exports = router
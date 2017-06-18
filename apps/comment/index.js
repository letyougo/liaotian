/**
 * Created by Administrator on 2017/6/11.
 */

var model = require('../../config/model')

const COMMENT = model.Comment
const connect =model.connect
var express = require('express')

var router = express.Router()

router.get('/',function (req, res) {
    if(req.query.offset && req.query.limit){
        COMMENT.findAll({
            offset:req.query.offset,
            limit:req.query.limit
        }).then(function (comment) {
            res.send(comment)
        })
    }else {
        COMMENT.findAll().then(function (comment) {

            res.send(comment)
        })
    }
})



module.exports = router
/**
 * Created by Administrator on 2017/6/11.
 */

var model = require('../../config/model')

const USER = model.User
const connect = model.connect
var express = require('express')

var router = express.Router()

router.get('/',function (req, res) {
    if(req.query.offset && req.query.limit){
        USER.findAll({
            offset:req.query.offset,
            limit:req.query.limit
        }).then(function (users) {
            res.send(users)
        })
    }else {
        USER.findAll().then(function (users) {
            res.send(users)
        })
    }
})

router.get('/:id/detail',(req,res)=>{
    USER.findById(req.params.id)
        .then(item=>{
            connect.query(
                'SELECT * FROM posts WHERE userId = ? ',
                {model:model.Post,replacements:[req.params.id]}
            ).then((list)=>{
                item.dataValues.post = list
                connect.query(
                    'SELECT * FROM users WHERE id IN (SELECT userId FROM relations WHERE friendId = ?) OR id in (SELECT friendId FROM relations WHERE userId = ?)',
                    {model:model.User,replacements:[req.params.id,req.params.id]}
                ).then((list)=>{
                    item.dataValues.friend = list
                    res.send(item)
                })

            })
        })
})

router.get('/:id/post',(req,res)=>{
    connect.query(
        'SELECT * FROM posts WHERE userId = ? ',
        {model:model.Post,replacements:[req.params.id]}
    ).then((list)=>{
        res.send(list)
    })
})

router.post('/:id/post',(req,res)=>{
    model.Post.create({
        userId:req.params.id,
        title:req.body.title,
        content:req.body.content
    }).then((item)=>{
        res.send(item)
    })
})

router.patch('/:userId/post/:postId',(req,res)=>{
    model
        .Post.findById(req.params.postId)
        .then(post=>{
            post.update(req.body)
                .then((item)=>{
                    res.send(item)
                })
        })
})

router.delete('/:userId/post/:postId',(req,res)=>{
    model
        .Post.findById(req.params.postId)
        .then(post=>{
            post.destroy()
                .then((item)=>{
                    res.send(item)
                })
        })
})

router.get('/:id/friend',(req,res)=>{
    connect.query(
        'SELECT * FROM users WHERE id IN (SELECT userId FROM relations WHERE friendId = ?) OR id in (SELECT friendId FROM relations WHERE userId = ?)',
        {model:model.User,replacements:[req.params.id,req.params.id]}
    ).then((list)=>{
        res.send(list)
    })
})

router.post('/:id/friend',(req,res)=>{
    connect.query(
        'INSERT INTO relations (createdAt, updatedAt, userId, friendId) VALUES (NOW(),NOW(),?,?)',
        {model:model.Relation,replacements:[req.params.id,req.body.friendId]}
    ).then((item)=>{
        res.send(item)
    })
})

router.get('/:id',(req,res)=>{
    USER.findById(req.params.id)
        .then(item=>{
            res.send(item)
        })
})


module.exports = router
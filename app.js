/**
 * Created by Administrator on 2017/6/11.
 */

var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser =require('body-parser')
app.set('json spaces', 4);
app.use(bodyParser({
    urlencoded:false
}))
app.use(bodyParser.json())
var user = require('./apps/user')
app.get('/',function (req,res) {
    res.send('hello world')
})

app.use(cors())
app.use('/user',user)
app.use('/post',require('./apps/post'))
app.use('/comment',require('./apps/comment'))
app.listen(3000)
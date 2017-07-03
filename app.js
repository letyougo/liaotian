/**
 * Created by Administrator on 2017/6/11.
 */

var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser =require('body-parser')
var fileUpload = require('express-fileupload');
var path = require('path')

app.set('json spaces', 4);
app.use(bodyParser({
    urlencoded:false
}))
app.use(bodyParser.json())
var user = require('./apps/user')
app.use('/static',express.static(path.join(__dirname,'static')))
app.get('/',function (req,res) {
    res.send('hello world')
})

app.use(cors())
app.use(fileUpload())
app.use('/user',user)
app.use('/post',require('./apps/post'))
app.use('/comment',require('./apps/comment'))
app.post('/upload',function (req, res) {
    var file = req.files.file
    var name = Date.parse(new Date())+'.'+file.name
    var url = 'http://localhost:3000/static/uploads/'+name
    var p = path.join(__dirname,'static','uploads',name)
    file.mv(p, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send({url:url});
    });
})
app.listen(3000)
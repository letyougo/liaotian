/**
 * Created by Administrator on 2017/6/11.
 */

var config = require('./config')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dongnao_liaotian', config.username,config.password);

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    nickname:Sequelize.STRING,
    password:Sequelize.STRING,
    logo:Sequelize.STRING,
});

const Post = sequelize.define('post',{
    title:Sequelize.STRING,
    content:Sequelize.STRING,
    image:Sequelize.STRING
})
Post.belongsTo(User)

const Comment = sequelize.define('comment',{
    content:Sequelize.STRING
})
Comment.belongsTo(User)
Comment.belongsTo(Post)

const Star = sequelize.define('star',{

})
Star.belongsTo(User)
Star.belongsTo(Post)

const Reply =sequelize.define('reply',{
    content:Sequelize.STRING
})

Reply.belongsTo(Comment)

const Request = sequelize.define('request',{
    content:Sequelize.STRING,
    response: Sequelize.BOOLEAN,
    read:Sequelize.BOOLEAN
})

Request.belongsTo(User,{as:'from'})
Request.belongsTo(User,{as:'to'})

const Relation = sequelize.define('relation',{

})



// User.hasOne(User,{as:'wife',through:Relation})
// User.hasMany(User,{as:'son',through:Relation})
User.belongsToMany(User,{as:'friend',through:Relation})

sequelize.sync()

module.exports = {
    User,
    Post,
    Comment,
    Star,
    Reply,
    Relation,
    Request,
    connect:sequelize
}


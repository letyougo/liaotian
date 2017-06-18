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

module.exports = {
    User,
    Post,
    Comment,
    Star,
    Reply,
    connect:sequelize
}


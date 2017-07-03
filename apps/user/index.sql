#
#
# SELECT * FROM posts
# WHERE userId in (SELECT friendId FROM relations WHERE relations.userId=1)
# OR userId in  (SELECT relations.userId FROM relations WHERE relations.friendId=1)
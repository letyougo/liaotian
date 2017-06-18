
--找到用户为1的所有好友
SELECT * FROM users  WHEREid IN (SELECT userId FROM relations WHERE friendId = 1) OR id IN (SELECT friendId FROM relations WHERE userId =1)

--找到用户为1的所有数据（文章，好友）
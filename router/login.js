const {add, find} = require('../service/user');



const login = (router) => {
    // 登录
    router.post('/login', async (req, res) => {
        let json = null
        let {username, password} = req.body;
        let data = await find(username,password);
        if(data){
            json = {
                code : 999999,
                msg:'登录成功',
                data:{
                    id:data.database.id
                }
            }
        }else{
            json = {
                code : 999999,
                msg:'登录失败',
                data:{
                    id:1
                }
            }
        }
        res.send(json)
    });
    // // 注册
    router.post('/resight', async (req, res) => {
        let {username, password} = req.body;
        let json = null;
        let findData = await find(username);
        if (username && password) {
            if (!findData || findData.length === 0) {
                let data = await add(username, password);
                if (data) {
                    json = {
                        code: 999999,
                        msg: '注册成功'
                    };
                } else {
                    json = {
                        code: 999997,
                        msg: '注册失败'
                    };
                }
            } else {
                json = {
                    code: 999997,
                    msg: '账户已存在'
                };
            }
        }
        res.send(json);
    });
};


module.exports = login;

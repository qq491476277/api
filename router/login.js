const {add, find,update} = require('../service/user');
const jwt = require('jsonwebtoken');

function getToken() {
    const user = {
        username: 'admin',
    };
    //这是加密的 key（密钥）
    const secret = 'dktoken';
    //生成 Token
    return jwt.sign(user, secret, {
        'expiresIn': 60 * 60 * 24 // 设置过期时间, 24 小时
    });
}


const login = (router) => {

    // 登录
    router.post('/login', async (req, res) => {

        let json = null;
        let {username, password} = req.body;
        let data = await find({username, password});
        if (data) {
            json = {
                code: 999999,
                msg: '登录成功',
                data: {
                    id: data[0].dataValues.id,
                    token: getToken()
                }
            };
        } else {
            json = {
                code: 999999,
                msg: '登录失败',
            };
        }
        res.send(json);
    });
    // // 注册
    router.post('/resight', async (req, res) => {
        let {username, password} = req.body;
        let json = null;
        let findData = await find({username});
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
    router.post('/change_password', async (req, res) => {
        let {username, password,new_password} = req.body;
        update({username, password},new_password)
    });
};


module.exports = login;

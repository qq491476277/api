const express = require('express');
const bodyParser = require("body-parser");

/* 路由 */
const router = require('./router');

const app = express();

/* 解决跨域 */
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

/* 中间件 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/', router);
app.listen(7777, () => {
    console.log('服务器已经启动1!');
});

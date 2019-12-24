const express = require('express')
const fs = require('fs')
const bodyParser = require("body-parser");
const svgCaptcha  = require('svg-captcha')

const codeConfig = {
    size: 5,// 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    height: 44
}
const app = new express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/code',(req,res)=>{
    var captcha = svgCaptcha.create(codeConfig);
    // req.session.captcha = captcha.text.toLowerCase()
    // console.log('a',captcha.data);
    res.type('svg');
    res.send(captcha.data);
})
// 登录
app.post('/login', (req, res) => {
    console.log('req.body',req.body);
    let {username,password} = req.body
    res.send('h1')
});
// 注册
app.post('/resight', (req, res) => {
    res.send('h1')
});


app.listen(3000, () => {
    console.log('服务器已经启动!');
})
const svgCaptcha = require('svg-captcha');

const codeConfig = {
    size: 5,// 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    height: 44
};

const code = (router) => {
        router.get('/code', (req, res) => {
            var captcha = svgCaptcha.create(codeConfig);
            // req.session.captcha = captcha.text.toLowerCase()
            // console.log('a',captcha.data);
            res.type('svg');
            res.send(captcha.data);
        });
    };



module.exports = code;

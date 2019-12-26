var express = require('express');
var router = express.Router();

const code = require('./code')
const login = require('./login')


code(router)
login(router)


module.exports = router

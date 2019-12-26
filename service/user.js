const db = require('../db')

const {sequelize,Sequelize} = db

var User = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement:true,
    },
    username: Sequelize.STRING(100),
    password: Sequelize.STRING(100),
}, {
    timestamps: false
});

const add =   (username,password) => {
      return User.create({
        username: username,
        password: password,
    });
};
const find =   (username,password) => {
    let where = {
        username:username
    }
    if(password){
        where.password = password
    }
      return User.findAll({
        where: where

    });
};

// var Pet = sequelize.define('pet', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true
//     },
//     name: Sequelize.STRING(100),
//     gender: Sequelize.BOOLEAN,
//     birth: Sequelize.STRING(10),
//     createdAt: Sequelize.BIGINT,
//     updatedAt: Sequelize.BIGINT,
//     version: Sequelize.BIGINT
// }, {
//     timestamps: false
// });
//
// const add = async () => {
//     var now = Date.now();
//     let pet = await Pet.create({
//         id: 'g-' + now,
//         name: 'Gaffey',
//         gender: false,
//         birth: '2007-07-07',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log(pet);
//
// };

module.exports = {
    add,
    find,
};

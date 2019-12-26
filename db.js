const Sequelize = require('sequelize');
const config = require('./config');
const Model = Sequelize.Model;


let {database, username, password, host, port} = config;
// // Option 1: Passing parameters separately
//
const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = {
    sequelize:sequelize,
    Sequelize:Sequelize,

}


// var Pet = sequelize.define('user', {
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
//
// module.exports = {
//     add: add
// };



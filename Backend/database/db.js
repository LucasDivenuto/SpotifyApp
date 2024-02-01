import {Sequelize} from 'sequelize';

const db = new Sequelize('dbentrega', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'    
})

export default db
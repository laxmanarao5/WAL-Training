//import db connection
const {sequelize}=require("../db.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Owner=sequelize.define("owner",{
    owner_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    owner_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})



//if acustomer is already existed then add address if customer is not existed then create annd address once 
//import db connection
const {sequelize}=require("../db.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Channel=sequelize.define("channel",{
    channel_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    channel_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})
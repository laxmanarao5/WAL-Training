//import db connection
const {sequelize}=require("../db.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Videos=sequelize.define("videos",{
    video_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    video_title:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})
//import db connection
const {sequelize}=require("../inventary.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Reviews=sequelize.define("reviews",{
    review_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    rating:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    review_desc:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})
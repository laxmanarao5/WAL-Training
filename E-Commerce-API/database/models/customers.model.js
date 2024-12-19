//import db connection
const {sequelize}=require("../inventary.config")
//import bcrypt js
const bcryptjs=require("bcryptjs")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Customers=sequelize.define("customers",{
    customer_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    customer_name:{
        type:DataTypes.STRING,
        // allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobile:{
        type:DataTypes.BIGINT
    }
},
{
    timestamps:false,
    freezeTableName:true
})
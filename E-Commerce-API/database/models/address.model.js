//import db connection
const {sequelize}=require("../inventary.config")
//import bcrypt js
const bcryptjs=require("bcryptjs")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Address=sequelize.define("address",{
    address_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    street:{
        type:DataTypes.STRING,
        // allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pincode:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})



//if acustomer is already existed then add address if customer is not existed then create annd address once 
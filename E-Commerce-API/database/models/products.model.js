//import db connection
const {sequelize}=require("../inventary.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Products=sequelize.define("products",{
    product_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    product_price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})
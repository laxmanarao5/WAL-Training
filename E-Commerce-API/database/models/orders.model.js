//import db connection
const {sequelize}=require("../inventary.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Orders=sequelize.define("orders",{
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    order_date:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false,
    freezeTableName:true
})
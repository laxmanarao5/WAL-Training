import {DataTypes} from "sequelize"
//import sequelize
import { sequelize } from "../db.config";

import bcryptjs from "bcryptjs"
//create model
export const User=sequelize.define("users",{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        set(pass:string){
                let hashedpassword=bcryptjs.hashSync(pass,4)
                this.setDataValue("password",hashedpassword)
        }
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})
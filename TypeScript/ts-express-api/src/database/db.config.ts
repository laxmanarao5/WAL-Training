import { Sequelize } from "sequelize";

//import dotenv
import * as dotenv from "dotenv"
dotenv.config({path:"../../.env"})

export const sequelize=new Sequelize(
    process.env.DB_NAME||"",
    process.env.DB_USER||"",
    process.env.DB_PASS||"",{
        host:process.env.HOST||"",
        dialect:"mysql"
    }
)

sequelize.sync()
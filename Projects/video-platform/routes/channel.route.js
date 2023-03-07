//import express
const exp=require("express")

//create router
const channelApp=exp.Router()

//body-parser
channelApp.use(exp.json())

//import controllers
const {test,addInfo,getInfo,getInfoByOwner,getInfoByChannel,getChannelByVideo}=require("../controllers/channel.controller")

//test Route
channelApp.get("/test",test)

//Add Info
channelApp.post("/channel",addInfo)

//get all channels
channelApp.get("/channels",getInfo)

//get info of channel
channelApp.get("/owner/:own_id",getInfoByOwner)

//get videos by channel id
channelApp.get("/channel/:chn_id",getInfoByChannel)

//get channel by video id
channelApp.get("/video/:vid_id",getChannelByVideo)

//export API
module.exports=channelApp
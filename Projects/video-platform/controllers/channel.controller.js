const expressAsyncHandler=require("express-async-handler")

//import models
const {Owner}=require("../database/models/owner.model")
const {Channel}=require("../database/models/channel.model")
const {Videos}=require("../database/models/videos.model")


//Associations

//Owner to Channel
Owner.Channel=Owner.hasOne(Channel,{foreignKey:"owner_id"})
Channel.Owner=Channel.belongsTo(Owner,{foreignKey:"owner_id"})

//Channel to Videos
Channel.Videos=Channel.hasMany(Videos,{foreignKey:"channel_id"})
Videos.Channel=Videos.belongsTo(Channel,{foreignKey:"channel_id"})


//create controller
exports.addInfo=expressAsyncHandler(async(req,res)=>{
    await Owner.create(req.body,{
        include:{
            association:Owner.Channel,
            include:{
                association:Channel.Videos
            }
        }
    })
    res.send({message:"Channel created sucessfully"})

})

//get info
exports.getInfo=expressAsyncHandler(async(req,res)=>{
    let result =await Owner.findAll({include:{
        model:Channel,
        attributes:{
            exclude:["owner_id"]
        },
        include:{
            model:Videos,attributes:{
                exclude:["channel_id"]
            }
        }
    }})
    res.send({message:"Channels",payload:result})
})

//get info by owner
exports.getInfoByOwner=expressAsyncHandler(async(req,res)=>{
    let result =await Owner.findOne({where:{
        owner_id:req.params.own_id

    },include:{
        model:Channel,
        attributes:{
            exclude:["owner_id"]
        },
        include:{
            model:Videos,attributes:{
                exclude:["channel_id"]
            }
        }
    }})
    res.send({message:"Channels",payload:result})
})

//get info by channel
exports.getInfoByChannel=expressAsyncHandler(async(req,res)=>{
    let result =await Channel.findOne({where:{
        channel_id:req.params.chn_id

    },include:{
            model:Videos,attributes:{
                exclude:["channel_id"]
            }
        }
    })
    res.send({message:"Channels and videos",payload:result})
})

//get channel info by video id
exports.getChannelByVideo=expressAsyncHandler(async(req,res)=>{
    let result =await Videos.findOne({where:{
        video_id:req.params.vid_id
    },
    include:{
        association:Videos.Channel
    }    
    })
    res.send({message:"Channel is ",payload:result})
})

//exporting 
exports.test=(req,res)=>{
    res.send({message:"Channel API working fine"})
}
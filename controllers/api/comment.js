const express = require('express');
const router = express.Router();
const db = require('../../models');


// taken from my tech blog might need restructuring -keith 

router.get("/",(req,res)=>{
    db.Comment.findAll({
        include:[db.User,{
            model:db.Post,
            include:[db.User]
        }]
    }).then(commentData=>{
        res.json(commentData);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error",
            error:err
        })
    })
})


router.post("/",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"Please login"})
    } else {

        db.Comment.create({
            body:req.body.body,
            UserId:req.session.user.id,
            PostId:req.body.postId
        }).then(commentData=>{
            res.json(commentData);
        }).catch(err=>{
            console.log(err)
            res.status(500).json({
                message:"error",
                error:err
            })
        })
    }
})

router.get("/:id",(req,res)=>{
    db.Comment.findByPk(req.params.id,{
        include:[db.User,{
            model:db.Post,
            include:[db.User]
        }]
    }).then(commentData=>{
        res.json(commentData);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error",
            error:err
        })
    })
})

router.delete("/:id",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"Must be logged in to scream"})
    } else {
       db.Comment.destroy({
           where:{
               id:req.params.id,
               UserId:req.session.user.id
           }
       }).then(delCommnet=>{
           if(delCommnet){
               res.json({
                   message:"Deleted"
               });
            } else {
                res.status(400).json({message:"error"})
            }
       }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error",
            error:err
        })
    })
    }
})

module.exports = router;
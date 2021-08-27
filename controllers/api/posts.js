const express = require('express');
const router = express.Router();
const db = require('../../models');

// taken from my tech blog might need restructuring -keith 

router.get("/",(req,res)=>{
    db.Post.findAll({
        include:[db.User]
    }).then(postData=>{
        res.json(postData);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"error!",
            error:err
        })
    })
})

router.get("/comments",(req,res)=>{
    db.Post.findAll({
        include:[db.User,{
            model:db.Comment,
            include:[db.User]
        }]
    }).then(postData=>{
        res.json(postData);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            message:"Oh no!",
            error:err
        })
    })
})


router.post("/",(req,res)=>{
    if(!req.session?.user?.id){
        res.status(401).json({message:"login!"})
    } else {

        db.Post.create({
           title:req.body.title,
         body:req.body.body,
        
         

            UserId:req.session.user.id
        }).then(postData=>{
            res.json(postData);
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
    db.Post.findByPk(req.params.id,{
        include:[db.User,{
            model:db.Comment,
            include:[db.User]
        }]
    }).then(postData=>{
        res.json(postData);
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
        res.status(401).json({message:"login!"})
    } else {
       db.Post.destroy({
           where:{
               id:req.params.id,
               UserId:req.session.user.id
           }
       }).then(delPost=>{
           if(delPost){
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
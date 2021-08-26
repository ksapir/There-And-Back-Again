const express = require('express');
const router = express.Router();
const db = require('../models');
const withAuth = require('../utils/auth');

//get all

//login
router.get("/login", (req,res) =>{
    console.log(req.session)
      if(req.session.user){
        res.redirect("/profile")  
        return 
      }
      res.render("loginSignup")
  })

//logout
router.get("/logout", (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
})

//sign up
router.get("/signUp", (req,res) =>{
    if(req.session.user){
        res.redirect("/profile")  
        return 
      }
    res.render("createUser")
})

// Session route to check if logged in
router.get("/session",(req,res)=>{
    res.json({
        sessionData:req.session
        
    })
  })

  //get profile by id


  module.exports = router
const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get("/", (req,res) =>{
    fs.readFile("./wta-parks-data.json", 'utf8', (err,data) => {
        console.log(data)
        res.json(data)
    })
  })

 module.exports = router
  
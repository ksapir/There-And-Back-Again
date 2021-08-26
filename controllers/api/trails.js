const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')

// Gets all trails
router.get("/", (req,res) =>{
    fs.readFile(path.resolve(__dirname,"./wta-parks-data.json"), 'utf8', (err, data) => {
        if (err){
            console.log(err);
        } else {
            const dataJson = JSON.parse(data)
            // console.log(dataJson)
            res.json(dataJson)
        }
    })
})


 module.exports = router
  
const express = require('express');
const router = express.Router();
const User=  require('../Models/User')

router.post('/add',(req,res)=>{
    console.log(req.body)
    new Model(rew.body),save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
        
    });
})


module.exports=router;


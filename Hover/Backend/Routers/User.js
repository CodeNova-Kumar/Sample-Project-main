const express = require('express');
const router = express.Router();
const Model=  require('../Models/User')

router.post('/add',(req,res)=>{
    console.log(req.body)
    new Model(rew.body),save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
        
    });
})
router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result)
        else res.status(400).json({message:'login failed'})
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
        
    });
})


module.exports=router;


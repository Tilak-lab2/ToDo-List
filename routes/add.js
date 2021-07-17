const express = require('express');
const addController = require('../controllers/add_controller');
const router = express.Router();
console.log("Add Router loaded!");
router.post('/',addController.add);
router.get("/add",(req,res,next)=>{
    User.findById({id:req.body._id}).then(result=>{
        res.status(400).json({
            message:"success",
            details:result
        })
    })
    .catch(err=>{
        if(err){
            console.log("err")
            res.status(500).json({
                err:err
            })
        }
        })
    })

module.exports = router;
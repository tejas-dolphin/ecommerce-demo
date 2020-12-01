const express = require('express');
const multer = require('multer');
const router = express.Router();
const Client = require('../backend/module');
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage});

router.get('/',async(req,res)=>{
    try {
        const data= await Client.query("select * from flipkartdata");
        res.json(data.rows)
        
    } catch (error) {
        res.send(error);
        
    }

})
router.post('/',upload.single('image'),async(req,res)=>{
    try {
        //console.log(req.file);
        const id=req.body.id;
        const image=req.file.path;
        const brand=req.body.brand;
        const mrp=req.body.mrp
        const data= await Client.query("insert into flipkartdata values($1,$2,$3,$4)",[id,image,brand,mrp]);
        data
        .save()
        .then(() => {
            res.json({
                message: "New User Created"
            });
        })
        
    } catch (error) {
        res.send(error);
        
    }

})
module.exports=router
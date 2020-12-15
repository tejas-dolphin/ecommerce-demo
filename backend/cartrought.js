const express = require('express');
const router = express.Router();
const Client = require('../backend/module');

router.put('/', async (req, res) => {
    try {
        const cartdata=req.body.cartvalueid;
        const userid=req.body.userid;
        const cartidfromtable=await Client.query("select signup.id ,cartdata.id from signup inner join cartdata on signup.cartid=cartdata.id where signup.id=$1",[userid]);
        const cartid=( cartidfromtable.rows);        
        const id=cartid[0].id;
        await Client.query("update cartdata set cartdata=($1) where id=($2)",[cartdata,id]);



        res.json({
            message:"data submited"})
        /*const id = req.body.id;
        const cartdata = req.body.cart;
        //console.log(typeof cartdata);   
        //console.log(cartdata);              
        await Client.query("update signup set cart=($1) where id=($2)",[cartdata,id]);
        res.json({
            message: "user updated"
        })*/
    } catch (err) {
        res.json({
            message: err
        })
    }
})
module.exports = router
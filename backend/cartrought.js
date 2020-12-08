const express = require('express');
const router = express.Router();
const Client = require('../backend/module');

router.put('/', async (req, res) => {
    try {
        const id = req.body.id;
        const cartdata = req.body.cart;
        
        await Client.query("update signup set cart=($1) where id=($2)",[cartdata,id]);
        res.json({
            message: "user updated"
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
})
module.exports = router
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Client = require('../backend/module');
const jwt =require('jsonwebtoken');

router.post('/',async (req, res) => {
    try {
        const data = await Client.query("select * from signup where email=($1)", [req.body.email])
        //console.log(data.rows);
        
        if (data.rows.length < 1) {
            // 401 means unauthorized
            return res.json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, data.rows[0].password, (err, result) => {
            if (err) {            
                 return res.json({
                    message: 'Auth failed'                 
                });              
            }
            if (result) {
                var token=jwt.sign({
                    username:data.rows[0].name,
                    userid:data.rows[0].id
                },
                "jwt",
                {
                    expiresIn:"1h"
                }
                );

                return res.json({
                    message: 'Auth success',
                    token:token
                });
            }
            res.json({
                message: 'Auth failed'
            });
        });

    }catch (err) {
        //console.log(err);
        res.send(err);
    };
});
module.exports = router;

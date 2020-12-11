const express = require('express');
const router = express.Router();
const Client = require('../backend/module');
const bcrypt = require('bcrypt')


router.get('/', async (req, res) => {
    const tablename = "signup";
    try {
        const data = await Client.query(`select * from ${tablename}`)
        res.json(data.rows)
    } catch (error) {
        res.send(error);
    }
})

router.get('/:name', async (req, res) => {
  const name=req.params.name
    try {
        const data = await Client.query("select cart from signup where name=($1)",[name])
        
        res.json(data.rows)
    } catch (error) {
        res.send(error);
    }
})



router.post("/", async (req, res) => {
    const data = await Client.query("select email from signup where email=($1)", [req.body.email])
    if (data.rows.length >= 1) {
        return res.json({
            message: 'Mail exists'
        });
    } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            try {
                const name = req.body.name;
                const email = req.body.email;
                const password = hash
                await Client.query("insert into signup(name,email,password) values($1,$2,$3)", [name, email, password]);
                res.json({
                    message: 'User created'
                });
            } catch (err) {
                res.json({
                    message: "err"
                })
            }
        })
    }
})
module.exports = router
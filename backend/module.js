const {Pool} =require('pg')

const Client=new Pool({
    user: "postgres",
    password: "123456789",
    database: "flipkart",
    host: "localhost",
    port: 5432
}) 



module.exports=Client
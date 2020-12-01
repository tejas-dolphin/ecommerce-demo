const express=require('express')
const app=express();
const router=require('./routes');

const cors=require('cors');
app.use(cors());

app.use(express.json());
app.use('/uploads',express.static('uploads'))


app.use("/home",router);




app.listen(4000,()=>console.log("server connected to port 4000"));
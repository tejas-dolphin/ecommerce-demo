const express=require('express')
const app=express();
const router=require('./routes');
const signuproute=require('./signuproutes')
const signinrout=require('./signinroute');
const cartrought =require('./cartrought');


const cors=require('cors');
app.use(cors());

app.use(express.json());
app.use('/uploads',express.static('uploads'))


app.use("/home",router);
app.use("/signup",signuproute);
app.use("/signin",signinrout);
app.use("/cart",cartrought);




app.listen(4000,()=>console.log("server connected to port 4000"));
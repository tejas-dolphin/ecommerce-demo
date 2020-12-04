import React,{useState} from "react";
import {Link ,useHistory} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {postsignup} from '../redux/action'
import axios from'axios';

function Signup(){
    const [user,setUser]=useState({       
        name:'',
        email:'',      
        password:''

    });  
    let history=useHistory();
    let dispatch=useDispatch();
    //let [message,setmessage]=useState( useSelector(msg=>msg.signupdata))
    //console.log(message);
    const onInputchange= (e) =>{
        setUser({...user,[e.target.name]:e.target.value});             
    };
    
    const submithandler=async(e)=>{
        e.preventDefault();
        const data={
            name:user.name,
            email:user.email,
            password:user.password
        }
      // dispatch(postsignup(data));
      // 
      // console.log(message);
      //await alert(message.message);
      // if(message.message==="User created")
      // history.push('/')
      // 
       await axios.post("http://localhost:4000/signup",data)
           .then(res=>{
               
               alert(res.data.message);
               if(res.data.message==="User created")
               history.push('/')             
               
           })
           .catch(err=>{
               alert(err)
           })
    }   
    return(
<>

<div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Create Account</h3>
                    <form on onSubmit={submithandler}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name *" value={user.name} name="name" onChange={onInputchange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email *" value={user.email} name="email" onChange={onInputchange} required />
                        </div>
                        
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value={user.password} name="password" onChange={onInputchange} required />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit btn btn-primary" value="Signup" />
                        </div>
                        <div className="form-group">
                            <p>Already have an account? <Link className="ForgetPwd"  exact to={"/"} >Signin</Link></p>
                            
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
       
    
</>
    )
}
export default Signup;
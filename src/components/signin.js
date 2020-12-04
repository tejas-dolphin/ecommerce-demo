import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {logindata} from '../redux/action'
import axios from "axios";

function Signin() {
    const [user,setUser]=useState({       
        email:'',      
        password:''

    });
   let dispatch=useDispatch();    
    const history=useHistory();
    const onInputchange= (e) =>{
        setUser({...user,[e.target.name]:e.target.value});             
    };
    const Submithandler=async(e)=>{       
        e.preventDefault();      
        const data1={            
            email:user.email,
            password:user.password
        }

        
        await axios.post("http://localhost:4000/signin",data1)
            .then(res=>{
              
               if(res.data!==""){
                dispatch(logindata(res.data));
                   history.push("/home");
               }
               if(res.data.message==='Auth failed')
               alert(res.data.message)
            })
            .catch(err=>{
                alert(err)
            })
    }
    return (
        <>   
         <div className="not-found">
    
      <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login </h3>
                    <form onSubmit={Submithandler}>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Your Email *" value={user.email}  onChange={onInputchange} required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Your Password *" value={user.password}  onChange={onInputchange} required />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit btn btn-primary" value="Login"  />
                        </div>
                        <div class="form-group">

                            <p>Dont have an account an account? <Link className="ForgetPwd"  exact to={"/signup"} >Click Hear   </Link></p>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
                
        </div> 
      


     </>
    )
}
export default Signin;
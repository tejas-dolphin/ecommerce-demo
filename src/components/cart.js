import React, { useEffect, useState } from 'react'
import { useHistory,useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { adddata } from '../redux/action'
import axios from 'axios'

function Cart() {
    const [cartdata, setcartdata] = useState(useSelector(value => value.cart))
    let history = useHistory();
    let dispatch=useDispatch()
    let cart=[];
    let logindata=useSelector(value=>value.logindata)
    const backtohome = () => {
        history.push("/home")
        dispatch(adddata(cart))
    }  
    const {name}=useParams();

    useEffect(()=>{
        lodadata();
       
    },[])
    const lodadata=async()=>{      
        const cartdata1=await axios.get("http://localhost:4000/signup/"+name)        
      
       let tempvalue=cartdata1.data[0];
       console.log(tempvalue)       
        //let arr=Object.entries(tempvalue)
       // console.log(arr);
    }
    const submitcartdata=async()=>{              
        const id=logindata[0].id;
        let cart=cartdata;
        console.log(cart);     
        const data={id,cart}     
        await axios.put("http://localhost:4000/cart",data)
        .then(res=>{
            alert(res.data.message)
        })
        .catch(err =>{
            alert(err)
        })        
    }  
        return (
            <div className="container ">                
                    <div className="card text-white bg-primary mb-3" >
                        <div className="card-header ">My Order</div>
                    </div>
                    {
                        cartdata.map(value =>
                            <div className="row" key={value.id}>
                                <div className="col-2">
                                    <img src={value.image} width="60" height="100" alt="Card image cap" />
                                </div>
                                <div className="col-10 mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{value.brand}</h5>
                                        <p className="card-text">{value.mrp}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    <button type="button" className="btn btn-primary mr-3" onClick={backtohome}>Back To Home</button>
                    <button className='btn btn-primary'onClick={submitcartdata} >submit</button>
                     
            </div>
        )
    }
export default Cart;
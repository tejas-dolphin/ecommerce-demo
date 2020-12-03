import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { adddata } from '../redux/action'

function Cart() {
    const [cartdata, setcartdata] = useState(useSelector(value => value.cart))
    let history = useHistory();
    let dispatch=useDispatch()
    let cart=[]
    const backtohome = () => {
        history.push("/home")
        dispatch(adddata(cart))
    }
    if (cartdata[0] === null) {
        return <h1>empty cart</h1>
    } else {
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
                    <button type="button" className="btn btn-primary" onClick={backtohome}>Back To Home</button>
            </div>
        )
    }
}

export default Cart;
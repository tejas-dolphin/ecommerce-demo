import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './cart';


function Navbar(props) {
  const data=props.cartvalue;
    //console.log(props.cartvalue);
        return (
        <div className="container ">
            <div className="p-2 mb-2 bg-primary text-white ">
                  <div className="row"> 
                  <div className="col">   
                <p>Flipkart</p>
                </div>
           
                <div className="col">   
            <div class="float-right">
        <label for="cartcounter" > {props.cartnumber}</label>
        <Link  to="/cart">                
                <button type="submit" className="btn btn-light">Cart</button>
                </Link>

                </div>
                </div>

                </div>
            </div>
           <Cart cartdata={data}/>
        </div>
    )
}

export default Navbar;
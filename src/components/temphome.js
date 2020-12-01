import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import db from "../db.json";
import Cart from "./cart";

function Home() {
    const [data, setdata] = useState([...db]);
    const [dbdata, setdbdata] = useState(data);
    const [cartcounter, setcartcounter] = useState(0)
   // const [cart, setcart] = useState()
    const [checkbox, setcheckbox] = useState([...new Set(data.map(value => value.brande))])
    const [chkboxvlu, setchkboxvlu] = useState()
    const [textboxvlu, settextboxvlu] = useState({
        fromdata: "",
        todata: ""
    })
    const [cart,setcart]=useState([])
  
  
    

    useEffect(() => {
        setdbdata(data)

        let txtboxfltr = dbdata.filter(value =>(value.MRP >= textboxvlu.fromdata && value.MRP <= textboxvlu.todata))
        console.log(txtboxfltr);
        if (txtboxfltr.length >= 1) {
            setdbdata(txtboxfltr)
        }

    }, [textboxvlu])
    useEffect(() => {
        let chkboxfltr = []
       // console.log(chkboxvlu);
        /*if (chkboxvlu === "samsung") {
            chkboxfltr = dbdata.filter(value => (value.brande === "samsung"))
            setdbdata(chkboxfltr)
            // console.log(dbdata)
        }
        if (chkboxvlu === "realme") {
            chkboxfltr = dbdata.filter(value => (value.brande === "realme"))
            setdbdata(chkboxfltr)
            //console.log(dbdata)
        }

        if (chkboxvlu === "apple") {
            chkboxfltr = dbdata.filter(value => (value.brande === "apple"))
            setdbdata(chkboxfltr)
            //console.log(dbdata)
        }
        console.log(dbdata)*/
        {
            dbdata.map(value=>{                
                if(chkboxvlu===value.brande){
                    chkboxfltr = dbdata.filter(data => (data.brande === chkboxvlu))
                    console.log(chkboxfltr);
                    setdbdata(chkboxfltr)                   
                }                
             })
        }
    }, [chkboxvlu])

    const textboxvluhandlar = (e) => {
        settextboxvlu({ ...textboxvlu, [e.target.name]: e.target.value });
        //console.log(textboxvlu) 

    }


    const handleAllChecked = (e, i) => {
        if (e.target.checked === true) {
            setchkboxvlu(checkbox[i])
        } if (e.target.checked === false) {
            setdbdata(data)
        }
    }
    
    
    const addtocarthandler = (e, i) => {
        
        if (e.target.checked === true) { 
               
            setcart([...cart,data[i]])
           
                   
            setcartcounter(cartcounter + 1)
        }
        if (e.target.checked === false) {
            setcart(cart.filter( value => value !==data[i] ))
            setcartcounter(cartcounter - 1)
        }
        
       
                
    }
    localStorage.setItem("cartdata",JSON.stringify(cart))
    return (
        <div className="container">
            <div className="container">
                <div className="p-2 mb-2 bg-primary text-white ">
                    <div className="row">
                        <div className="col">
                            <p>Flipkart</p>
                        </div>
                        <div className="col">
                            <div className="float-right">
                                <label htmlFor="cartcounter">{cartcounter}</label>
                                <Link to="/cart">
                                    <button type="submit" className="btn btn-light">Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 border">
                    <div className="form-row">
                        <div className="col">
                            <input type="number" className="form-control" name="fromdata" value={textboxvlu.fromdata} placeholder="From" onChange={textboxvluhandlar} />
                        </div>
                        <div>TO</div>
                        <div className="col">
                            <input type="number" className="form-control" name="todata" value={textboxvlu.todata} placeholder="To" onChange={textboxvluhandlar} />
                        </div>
                    </div>

                    {
                        checkbox.map((value, i) =>
                            <div className="form-check" key={i}>

                                <input className="form-check-input" type="checkbox" name="chk1" value={value} onChange={(e) => handleAllChecked(e, i)} />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    {value}
                                </label>
                            </div>
                        )
                    }
                </div>

                <div className="col-md-9 border">
                    <div className="row">
                        {
                            dbdata.map((Items, i) =>
                                <div className="col-sm-4" key={i}>
                                    <div className="card" >
                                        <img className="card-img-top " src={Items.image} width="600" height="500" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{Items.brande}</h5>
                                            <p className="card-text">&#x20B9; {Items.MRP}</p>
                                            <input className="form-check-input" type="checkbox" onChange={(e) => addtocarthandler(e, i)} />
                                            <label className="form-check-label" >Add To Cart</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
                    

        </div>
    )
}

export default Home;
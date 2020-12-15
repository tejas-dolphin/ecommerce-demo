import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { adddata } from '../redux/action'
import { getdata } from '../redux/action'
import { useHistory } from 'react-router-dom'

function Home(){
    const data1 = useSelector(value => value.data);
   
    const dispatch = useDispatch();
    // const data1=useSelector(value=>value.data);     
    const [data, setdata] = useState(data1);
    // const data=data1
   // console.log("api", data1, "data", data);
    const [dbdata, setdbdata] = useState(data);
    const [cartcounter, setcartcounter] = useState(0)
    // const [cart, setcart] = useState()
    const [checkbox, setcheckbox] = useState([...new Set(data.map(value => value.brand))])
    const [chkboxvlu, setchkboxvlu] = useState()
    const [textboxvlu, settextboxvlu] = useState({
        fromdata: "",
        todata: ""
    })
    //  let logindata=useSelector(value=>value.logindata)
   //let logindatavalue=logindata[0].name;
    const history = useHistory();
    const [cart, setcart] = useState(useSelector(value => value.cart))
    useEffect(() => {
        dispatch(getdata());
       
    }, [])
    useEffect(() => {
      
      setdbdata(data1)
       
    }, [data1])

    useEffect(() => {
        setdbdata(data)
        let txtboxfltr = dbdata.filter(value => (value.mrp >= textboxvlu.fromdata && value.mrp <= textboxvlu.todata))
        //console.log(txtboxfltr);
        if (txtboxfltr.length >= 1) {
            setdbdata(txtboxfltr)
        }

    }, [textboxvlu])

    useEffect(() => {
        let chkboxfltr = []
        {
            dbdata.map(value => {
                if (chkboxvlu === value.brand) {
                    chkboxfltr = dbdata.filter(data => (data.brand === chkboxvlu))
                   // console.log(chkboxfltr);
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
            setcart([...cart, data[i]])
            setcartcounter(cartcounter + 1)
        }
        if (e.target.checked === false) {
            setcart(cart.filter(value => value !== data[i]))
            setcartcounter(cartcounter - 1)
        }
    }
    dispatch(adddata(cart))
    return (
        <div className="container ">
            <div className="p-1 mb-2 bg-primary text-white ">
                <div className="row">
                    <div className="col">
                        <label className="p-1">Flipkart</label>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <label className="mr-3" htmlFor="cartcounter">{cartcounter}</label>
                            <Link to={`/cart`}>
                                <button type="submit" className="mr-5 btn btn-outline-light">View Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 border-right ">
                    <div className="row border-bottom">
                        <div className="col">
                            <label className="font-weight-bold mb-3">Filters</label>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold mt-2 mb-3">Price</label>
                        </div>

                    </div>

                    <div className="form-row mb-5 ">



                        <div className="col ">
                            <input type="number" className="form-control" name="fromdata" value={textboxvlu.fromdata} placeholder="From" onChange={textboxvluhandlar} />
                        </div>
                        <div>TO</div>
                        <div className="col">
                            <input type="number" className="form-control" name="todata" value={textboxvlu.todata} placeholder="To" onChange={textboxvluhandlar} />

                        </div>
                    </div>

                    <div className="row border-top">
                        <div className="col">
                            <label className="font-weight-bold mt-2 mb-3">Brand</label>
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

                <div className="col-md-9 mt-3">
                    <div className="row">
                        {
                            dbdata.map((Items, i) =>
                                <div className="col-sm-3" key={i}>
                                    <div className="" >
                                        <img className="" src={Items.image} alt="Card image cap" width="150" height="300" />
                                        <div className="card-body  ">
                                            <h5 className="card-title ">{Items.brand}</h5>
                                            <p className="">&#x20B9; {Items.mrp}</p>
                                            <input className=" " type="checkbox" onChange={(e) => addtocarthandler(e, i)} />
                                            <label className="ml-2" >Add To Cart</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <button className='btn btn-primary mr-2' onClick={() => history.push('/aaa')}>refresh</button>
                        <Link to="/add">
                            <button className='btn btn-primary' >Add Mobile</button>
                        </Link>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Home;
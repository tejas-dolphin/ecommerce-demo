import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {createnewdata} from '../redux/action'


function Addmobile() {
    const [id,setid]=useState("");
    const [brand,setbrand]=useState("");
    const [mrp,setmrp]=useState("");
    const [image,setimage]=useState("")
    let history=useHistory();
    let dispatch=useDispatch();


    const submitdata=(e)=>{
        e.preventDefault();
        //console.log(id,brand,mrp,image);
        const data={id,brand,mrp,image};
        console.log(data);
        dispatch(createnewdata(data)) 
      // history.push("/aaa")  
     
    }

 
    
    return (
        <div className='container'>
            <form onSubmit={submitdata}>
                <div className="col-md-6">
                    <h3>Add New Mobile</h3>
                    <div className="form-group">
                        <label htmlFor="id">Enter Mobile Id</label>
                        <input type="number" className="form-control" placeholder="Enter Mobile Id " value={id} onChange={(e)=>setid(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Enter Mobile Brand</label>
                        <input type="text" className="form-control" placeholder="Enter Mobile Brand" value={brand} onChange={(e)=>setbrand(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mrp">Enter Mobile MRP</label>
                        <input type="number" className="form-control" placeholder="Enter Mobile MRP" value={mrp} onChange={(e)=>setmrp(e.target.value)} required />
                    </div>
                    
                    <div className="custom-file">

                        <input type="file" className="custom-file-input " onChange={(e)=>setimage(e.target.files[0]) } required />
                        <label className="custom-file-label" htmlFor="image">Choose file...</label>
    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-primary mr-3" onClick={()=>history.push('/')}>Back To Home</button>
                        <input type="submit" className="btnSubmit btn btn-primary" value="Add Mobile" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Addmobile;
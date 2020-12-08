import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getdata } from '../redux/action'
import {useHistory} from 'react-router-dom'

function Temphome1(){
  // const dispatch = useDispatch();
  // const data= useSelector(value=>value.data); 
  // console.log(data);

    let history=useHistory();
   
   
    useEffect(() => {
history.push('/home')
        //dispatch(getdata())         
        },[])  


    return(
        <>
       {/*} {
            data.map(value=>
            <p key={value.id}>{value.mrp}</p>
                )
        }
      {*/}
    </>

    )
}


export default Temphome1;
import {add_data} from "../redux/type"
import {get_data} from "../redux/type"
import {create_newdata} from "../redux/type"
import {post_signup} from "../redux/type"
import axios from 'axios';


export const adddata = (data) => {
    return {
        type: add_data,
        payload: data
    }
}

export const getdata = () =>{ 
 return  async (dispatch) => {
    const result = await axios.get("http://localhost:4000/home");
    dispatch({
      type: get_data,
      payload: result.data,
    });
}

  };    

 export const createnewdata = (data) => {
    return  async (dispatch) => {
      console.log("redux",data);
      const result = await axios.post("http://localhost:4000/home",data);
      

      dispatch({
        type: create_newdata,
        payload: result.data,
      });
  }
  
};

export const postsignup = (data) => {
  return  async (dispatch) => {   
    const result = await axios.post("http://localhost:4000/signup",data);
    dispatch({
      type: post_signup,
      payload: result.data,
    });
}
};




/*export const createnewdata = (data) => {
  return  {
   
      type: create_newdata,
      payload:data,
 
}

};*/
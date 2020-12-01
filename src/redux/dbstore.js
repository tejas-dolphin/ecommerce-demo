import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import db from "../db.json";

const initialstate=db
const reducer = (state=initialstate,action) =>{
    switch(action.type){


        default:return state
    }

}
const store=createStore(reducer,composeWithDevTools());

export default store
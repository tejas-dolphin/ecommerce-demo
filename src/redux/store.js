import { createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer} from './reducer'
import Thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store
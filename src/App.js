
import Home from "./components/home"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Thome from './components/temphome'
import { Provider } from 'react-redux'
import Temphome1 from './components/temphome1'
import store from "./redux/store";
import Addmobile from "./components/addmobile";
import Signup from "./components/signup";
import Signin from "./components/signin";



//import './App.css';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Router>
        
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Signin} />
          <Route exact path="/aaa" component={Temphome1} />
          <Route exact path="/add" component={Addmobile} />
          <Route exact path="/cart/:name" component={Cart} />
         
        </Router>
      </div>
    </Provider>


  );
}

export default App;

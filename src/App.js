
import Home from "./components/home"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Thome from './components/temphome'
import { Provider } from 'react-redux'
import Temphome1 from './components/temphome1'
import store from "./redux/store";
import Addmobile from "./components/addmobile";



//import './App.css';

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/aaa" component={Temphome1} />
          <Route exate path="/add" component={Addmobile} />
          <Route exact path="/cart" component={Cart} />
        </Router>
      </div>


    </Provider>


  );
}

export default App;

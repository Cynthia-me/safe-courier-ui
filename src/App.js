import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import ParcelOrder from './Components/ParcelOrder';
import MyParcels from './Components/MyParcels';

function App() {

  return (
      <div className="app">
      
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path = '/signup' component = {SignUpForm}/>
          <Route exact path = '/parcelOrder' component = {ParcelOrder}/>
          <Route exact path = '/myParcels' component = {MyParcels}/>
          <Route exact path = '/' component = {Services}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;

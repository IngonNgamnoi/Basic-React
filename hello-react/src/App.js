import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import CounterBrand from './CounterBrand';
//import './App.css';
//สร้างcomponent ชื่อว่า app jsx
class App extends Component {
      render(){
        return(
          <Router>
          <div>
             <Header />
             
             <hr />
             
             <Switch>
              <Route exact path='/counterBrand' component={CounterBrand} />
             </Switch>
          </div>
       </Router>

          
        );
      }
  
}

export default App;

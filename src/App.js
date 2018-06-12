import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import CounterBrand from './CounterBrand';
import Footer1 from './Footer1';


//import './App.css';
//สร้างcomponent ชื่อว่า app jsx
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Content} />
            <Route exact path='/home' component={Content} />
            <Route exact path='/counterBrand' component={CounterBrand} />

          </Switch>
          <Footer1/>


        </div>
      </Router>


    );
  }

}

export default App;

import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
    render(){
      return(
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    
      <img src="https://article.redprice.co/wp-content/uploads/2018/02/Untitled-3.png"/>
    

   <nav class="breadcrumb" >
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/counterbrand">Conuter Brand</a></li>
    <li><a href="#">Kroean Brand</a></li>
    
  </ul>
</nav>
        
  </div>
</nav>

      );     
    }
  }
  export default Header;
import React, { Component } from 'react';
import Preimage from './Preimage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Listitem extends Component {
    render() {
        return (
            <div className="column is-one-quarter">
             <Link to={`/detail/${this.props.product.id}`}> 
    
                <Preimage image={this.props.product.image} />
            </Link>
                <button>Add to cart</button>
                
            </div>
              
        )
    }
}


export default Listitem;
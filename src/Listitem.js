import React, { Component } from 'react';
import Preimage from './Preimage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Listitem extends Component {
    constructor(){
        super()
        this.state={
            cart:[]
        };
    }
    addTocart(id){
       
        var myarray = this.state.cart;
        myarray.push(id);
        this.setState({
            cart:myarray
        });
        console.log(this.state.cart);
    }

    render() {
        return (
            <div className="column is-one-quarter">
             {/* <Link to={`/detail/${this.props.product.id}`}>  */}
    
                <Preimage image={this.props.product.image} />
            {/* </Link> */}
                <button onClick={this.addTocart.bind(this,this.props.product.id)}>Add to cart</button>
                
            </div>
              
        )
    }
}


export default Listitem;
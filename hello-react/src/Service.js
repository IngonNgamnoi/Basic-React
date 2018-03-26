import React, { Component } from 'react';
import axios from 'axios';
import Preimage from './Preimage';

export default class Service extends React.Component{
    state  = {
        product : []
    }
    componentDidMount(){
        axios.get('http://www.mocky.io/v2/5ab7e14e3400007a0067ac75')
        .then(res =>{
            const product = res.data;
            this.setState({ product});
        })
    }
    render(){
        return(
            
            <ul>
            { this.state.product.map(product => <img src={product.image}/>)}
            
          </ul>
          
        );
    }
}

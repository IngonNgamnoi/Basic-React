import React, { Component } from 'react';
import Http from './ServiceReact';

import Listitem from './Listitem';

class List extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        let api = new Http();
        api.getAll().then((res)=>{
            this.setState({
                products:res.data
            })
        })
      
    }
    render() {
        return (
            <div className="columns is-multiline">
                {
                    this.state.products.map((product) => {
                        return <Listitem key={product.id} product={product} />
                    })
                }
            </div>
        );
    }
}

export default List;

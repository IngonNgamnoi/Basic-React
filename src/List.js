import React, { Component } from 'react';
import Http from './Service';

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
        api.getAll().then((result)=>{
            this.setState({
                products: result.data
            });
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

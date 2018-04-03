import React, { Component } from 'react';
import Service from './Service';
import './Preimage.css'
import productPreload from './preload.png';

class Preimage extends Component {

  constructor(props) {
    super();
    this.productImage = null;
  }

  componentDidMount() {
        
    const productImg = new Image();

    productImg.src = this.props.image;

    productImg.onload = () => {
      this.productImage.setAttribute(
        'style',
        `background-image: url('${this.props.image}')`
      );
      this.productImage.classList.add('iron-image-fade-in');
    }

  };

  render() {
    return (
      <div className="iron-image-container">
      
        <div 
          className="iron-image-loaded" 
          ref={imageLoadedElem => this.productImage = imageLoadedElem}>
        </div>
        <div 
          className="iron-image-preload" 
          style={{ backgroundImage: `url('${productPreload}')` }}>
        </div>
      
      </div>
    )
  }

}

export default Preimage;
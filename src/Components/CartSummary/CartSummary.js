import React from 'react';
import './CartSummary.css';
import logo from '../../images/star-rating.png';

const CartSummary = (props) => {
    console.log('cart summary', props);
    const { review, image, instructor, name, price } = props.cart;
    return (
        <div className="cart-summary">
            <div>
                <img style={{ height: '60px' }} src={image} alt="" />
            </div>

            <div>
                <h6>{name}</h6>
                <p className="text-secondary">by {instructor} <span className="text-danger font-weight-bold">${price}</span></p>
                <hr />
            </div>

        </div>
    );
};

export default CartSummary;
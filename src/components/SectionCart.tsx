import React, { useState } from 'react';
import '../styles/sectioncart.css';
import idelete from '../assets/delete-icon.png';

const SectionCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="section-cart">
      <div className='cart-infos'>
        <div className='order-product'>
          <div className='header-products'>
            <p className='text header-item'>Product</p>
            <p className='text header-item'>Price</p>
            <p className='text header-item'>Quantity</p>
            <p className='text header-item'>Subtotal</p>
          </div>
          <div className='row-product'>
            <img className='image-product' src="" alt="" />
            <span className='product-name'>Asgaard sofa</span>
            <span className='product-price'>Rs. 250,000.00</span>
            <div className='quantity-control'>
              <button className='quantity-btn' onClick={handleDecrease}>-</button>
              <p className='quantity'>{quantity}</p>
              <button className='quantity-btn' onClick={handleIncrease}>+</button>
            </div>
            <span className='product-subtotal'>Rs. {250000.00 * quantity}</span>
            <div className='delete'>
              <img className='icon-delete' src={idelete} alt="" />
            </div>
          </div>
        </div>
        <div className='card-totals'>
          <h3 className='cart-totals-title'>Cart Totals</h3>
          <div className='totals-row'>
            <p className='text'>Subtotal</p>
            <span className='subvalue'>Rs. {250000.00 * quantity}</span>
          </div>
          <div className='totals-row'>
            <p className='text'>Total</p>
            <span className='total-value'>Rs. {250000.00 * quantity}</span>
          </div>
          <button className='btn-checkout'>Check Out</button>
        </div>
      </div>
    </section>
  );
}

export default SectionCart;

import React, { useState } from 'react';
import '../styles/sectioncart.css';
import idelete from '../assets/delete-icon.png';

const initialCart = [
  {
    id: 1,
    title: 'Asgaard sofa',
    salePrice: 250000.00,
    quantity: 1,
    image: 'path_to_image',
  },
];

const SectionCart: React.FC = () => {
  const [cart, setCart] = useState(initialCart);

  const handleDecrease = (productId: number) => {
    setCart(cart.map(product => 
      product.id === productId ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product
    ));
  };

  const handleIncrease = (productId: number) => {
    setCart(cart.map(product => 
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleRemove = (productId: number) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.salePrice * product.quantity, 0).toFixed(2);
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
          {cart.map(product => (
            <div key={product.id} className='row-product'>
              <img className='image-product' src={product.image} alt={product.title} />
              <span className='product-name'>{product.title}</span>
              <span className='product-price'>Rs. {product.salePrice.toFixed(2)}</span>
              <div className='quantity-control'>
                <button className='quantity-btn' onClick={() => handleDecrease(product.id)}>-</button>
                <p className='quantity'>{product.quantity}</p>
                <button className='quantity-btn' onClick={() => handleIncrease(product.id)}>+</button>
              </div>
              <span className='product-subtotal'>Rs. {(product.salePrice * product.quantity).toFixed(2)}</span>
              <div className='delete' onClick={() => handleRemove(product.id)}>
                <img className='icon-delete' src={idelete} alt="Delete" />
              </div>
            </div>
          ))}
        </div>
        <div className='card-totals'>
          <h3 className='cart-totals-title'>Cart Totals</h3>
          <div className='totals-row'>
            <p className='text'>Subtotal</p>
            <span className='subvalue'>Rs. {calculateTotal()}</span>
          </div>
          <div className='totals-row'>
            <p className='text'>Total</p>
            <span className='total-value'>Rs. {calculateTotal()}</span>
          </div>
          <button className='btn-checkout'>Check Out</button>
        </div>
      </div>
    </section>
  );
}

export default SectionCart;

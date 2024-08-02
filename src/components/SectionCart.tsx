import React, { useContext } from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/section-cart.css';
import deleteIcon from '../assets/delete-icon.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SectionCart: React.FC = () => {
  const { cart, setCart } = useCart();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (authContext === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, loading } = authContext;

  const handleDecrease = (productId: number) => {
    setCart(cart.map(product => 
      product.id === productId ? { ...product, quantity: Math.max((product.quantity || 1) - 1, 1) } : product
    ));
  };

  const handleIncrease = (productId: number) => {
    setCart(cart.map(product => 
      product.id === productId ? { ...product, quantity: (product.quantity || 1) + 1 } : product
    ));
  };

  const handleRemove = (productId: number) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.salePrice * (product.quantity || 1), 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section-cart">
      <div className='cart-infos'>
        <div className='order-product'>
          <div className='header-products'>
            <p className='text header-item'></p>
            <p className='text header-item'>Product</p>
            <p className='text header-item'>Price</p>
            <p className='text header-item'>Quantity</p>
            <p className='text header-item'>Subtotal</p>
          </div>
          {cart.map(product => (
            <div key={product.id} className='row-product'>
              <img className='image-product' src={product.images.mainImage} alt={product.title} />
              <span className='product-name'>{product.title}</span>
              <span className='product-price'>Rs. {product.salePrice.toFixed(2)}</span>
              <div className='quantity-control'>
                <button className='quantity-btn' onClick={() => handleDecrease(product.id)}>-</button>
                <p className='quantity'>{product.quantity}</p>
                <button className='quantity-btn' onClick={() => handleIncrease(product.id)}>+</button>
              </div>
              <span className='product-subtotal'>Rs. {(product.salePrice * (product.quantity || 1)).toFixed(2)}</span>
              <div className='delete' onClick={() => handleRemove(product.id)}>
                <img className='icon-delete' src={deleteIcon} alt="Delete" />
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
          <button className='btn-checkout' onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionCart;

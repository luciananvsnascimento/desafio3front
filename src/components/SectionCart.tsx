import '../styles/sectioncart.css';
import idelete from '../assets/delete-icon.png'

const SectionCart = () => {
  return (
    <section className="section-cart">
        <div className='cart-infos'>
            <div className='order-product'>
                <div className='header-products'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className='row-product'>
                    <img className='image-product' src="" alt="" />
                    <p className='product-name'>mesa</p>
                    <p className='product-price'>R$ 00,00</p>
                    <p className='quantity'>5</p>
                    <p className='subtotal'>R$ 00,00</p>
                    <div className='delete'>
                    <img className='icon-delete' src={idelete} alt="" />
                    </div>
                </div>
            </div>
            <div className='card-totals'>
                <h3>Cart Totals</h3>

                <button className='btn-checkout'>Check Out</button>
            </div>
        </div>
    </section>
  );
}

export default SectionCart;
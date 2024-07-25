import '../styles/sectioncheckout.css';

const SectionCheckout = () => {
  return (
    <section className="section-checkout">
      <div className="billing-form">
        <h2>Billing details</h2>
        <form className="billing-form-content">
          <div className="form-row">
            <div className="form-group form-group-half">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="form-group form-group-half">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="company-name">Company Name (Optional)</label>
            <input type="text" id="company-name" name="company-name" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="zip-code">ZIP code</label>
            <input type="text" id="zip-code" name="zip-code" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="country">Country / Region</label>
            <input type="text" id="country" name="country" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="address">Street address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="city">Town / City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="province">Province</label>
            <input type="text" id="province" name="province" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="addon-address">Add-on address</label>
            <input type="text" id="addon-address" name="addon-address" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group full-width">
            <label htmlFor="additional"></label>
            <input type="text" id="additional" name="additional" placeholder="Additional information" />
          </div>
        </form>
      </div>
      <div className="order-payment">
        <div className="order-summary">
          <div className="order-details">
            <div className="order-item">
              <span className='title-pdt'>Product</span>
              <span className='title-pdt'>Subtotal</span>
            </div>
            <div className="order-item">
              <span className='nm-product'>Asgaard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="order-item">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="order-item total">
              <span>Total</span>
              <span className='totalspan'>Rs. 250,000.00</span>
            </div>
          </div>
          <hr/>
          <div className="payment-method">
            <label>
              <input type="radio" name="payment" value="bank-transfer" checked />
              Direct Bank Transfer
            </label>
            <label>
              <input type="radio" name="payment" value="cash-on-delivery" />
              Cash On Delivery
            </label>
            <p>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
              order will not be shipped until the funds have cleared in our account.
            </p>
           
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.</p>
          </div>
          <button className="btn-checkout">Place order</button>
        </div>
      </div>
    </section>
  );
}

export default SectionCheckout;

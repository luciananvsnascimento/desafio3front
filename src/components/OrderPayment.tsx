import React from 'react';

const OrderPayment = () => {
  return (
    <div className="order-payment">
      <div className="order-summary">
        <div className="order-details">
          <div className="order-item">
            <span className="title-pdt">Product</span>
            <span className="title-pdt">Subtotal</span>
          </div>
          <div className="order-item">
            <span className="nm-product">Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="order-item">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="order-item total">
            <span>Total</span>
            <span className="totalspan">Rs. 250,000.00</span>
          </div>
        </div>
        <hr />
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
            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            Your order will not be shipped until the funds have cleared in our account.
          </p>
          <p>
            Your personal data will be used to support your experience throughout this website, to manage access to
            your account, and for other purposes described in our <a href="#">privacy policy</a>.
          </p>
        </div>
        <button className="btn-checkout">Place order</button>
      </div>
    </div>
  );
};

export default OrderPayment;

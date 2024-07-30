import BillingForm from './BillingForm';
import OrderPayment from './OrderPayment';
import '../styles/section-checkout.css';

const SectionCheckout = () => {
  return (
    <section className="section-checkout">
      <BillingForm />
      <OrderPayment />
    </section>
  );
};

export default SectionCheckout;

import '../styles/banner.css';
import guarantee from '/src/assets/guarantee.png';
import shipping from '/src/assets/shipping.png';
import trophy from '/src/assets/trophy.png';
import support from '/src/assets/support.png';

const BannerBenefits = () => {
  return (
    <div className="banner">
      <div className="content-banner">
        <div className="benefits">
          <div className="image-container">
            <img src={trophy} alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src={guarantee} alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src={support} alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src={shipping} alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerBenefits;

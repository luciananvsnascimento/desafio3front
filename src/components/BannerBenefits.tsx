import '../styles/banner-benefits.css';

const BannerBenefits = () => {
  return (
    <div className="banner">
      <div className="content-banner">
        <div className="benefits">
          <div className="image-container">
            <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/trophy.png' alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/guarantee.png' alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/support.png' alt="Benefit Image" />
          </div>
          <div className="text-container">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="benefits">
          <div className="image-container">
            <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/shipping.png' alt="Benefit Image" />
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
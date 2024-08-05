import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="herohome">
      <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/hero-img.png' alt="Hero" />
      <div className="homebox">
        <div className="hero-info">
          <p className="s-hero">New Arrival</p>
          <h1>Discover Our <br />New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="buy">BUY NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

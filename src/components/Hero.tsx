import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="herohome">
      <div className='homebox'>
        <div className='hero-info'>
          <span className='s-hero'>New Arrival</span>
          <h1>Discover Our <br />New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='buy'>BUY NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

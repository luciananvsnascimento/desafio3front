import '../styles/hero.css';
import HeroImg from '../assets/hero-img.jpg';

const Hero = () => {
  return (
    <section className="herohome">
      <img src={HeroImg} alt="Hero" />
    </section>
  );
}

export default Hero;

import '../styles/sectionhome.css';
import CategoriesArea from '../components/CategoriesArea'
import OurProducts from '../components/OurProducts';
import Carrossel from './Carrossel';

const SectionHome = () => {
  return (
    <section className="section-home">
      <CategoriesArea />
      <OurProducts/>
      <Carrossel/>
    </section>
  );
}

export default SectionHome;
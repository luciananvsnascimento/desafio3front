import React, { useEffect, useState } from 'react';
import '../styles/section-home.css';
import CategoriesArea from '../components/CategoriesArea';
import OurProducts from '../components/OurProducts';
import Carrossel from './Carrossel';
import FurtureHome from './FurtureHome';

const SectionHome = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/products/51')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <section className="section-home">
      <CategoriesArea />
      <OurProducts />
      {product && <Carrossel data={product} />}
      <FurtureHome />
    </section>
  );
}

export default SectionHome;

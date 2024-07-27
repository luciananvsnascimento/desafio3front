import React, { useEffect, useState } from 'react';
import '../styles/section-home.css';
import CategoriesArea from '../components/CategoriesArea';
import OurProducts from '../components/OurProducts';
import Carrossel from './Carrossel';
import FurtureHome from './FurtureHome';

interface Product {
  id: number;
  name: string;
  category: string;
  images: {
    mainImage: string;
    gallery: string[];
  };
}

const SectionHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched: ", data); // Log the fetched data
        const selectedProducts = data.sort(() => 0.5 - Math.random()).slice(0, 6);
        setProducts(selectedProducts);
      });
  }, []);

  return (
    <section className="section-home">
      <CategoriesArea />
      <OurProducts />
      {products.length > 0 && <Carrossel data={products} />}
      <FurtureHome />
    </section>
  );
}

export default SectionHome;

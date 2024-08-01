import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../types/Product';
import CategoriesArea from '../components/CategoriesArea';
import OurProducts from '../components/OurProducts';
import Carrossel from './Carrossel';
import FurtureHome from './FurtureHome';



const SectionHome: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        console.log("Data fetched: ", response.data);
        const selectedProducts = response.data.sort(() => 0.5 - Math.random()).slice(0, 6);
        setProducts(selectedProducts);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
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
};

export default SectionHome;

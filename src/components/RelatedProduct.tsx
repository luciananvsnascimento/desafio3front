import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/related-product.css'
import { Link } from 'react-router-dom';
import CardProduct from './CardProduct';
import { Product } from '../types/Product';

interface RelatedProductProps {
  product: Product;
}

const RelatedProduct: React.FC<RelatedProductProps> = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      const allProducts: Product[] = response.data;

      const related = allProducts.filter(
        (p) =>
          p.id !== product.id &&
          (p.category === product.category || p.tags.some((tag) => product.tags.includes(tag)))
      ).slice(0, 4);

      setRelatedProducts(related);
    };

    fetchRelatedProducts();
  }, [product]);

  return (
    <section className="related-product">
      <p className='title-related'>Related Products</p>
      <div className="cards-area">
        {relatedProducts.map((relatedProduct) => (
          <CardProduct key={relatedProduct.id} product={relatedProduct} />
        ))}
      </div>
      <button className='show-more'>
      <Link to='/shop' className='show-txt'>Show More</Link>
      </button>
    </section>
  );
};

export default RelatedProduct;

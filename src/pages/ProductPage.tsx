import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavigateProduct from '../components/NavigateProduct';
import DescriptionProduct from "../components/DescriptionProduct";
import ProductArea from "../components/ProductArea";
import RelatedProduct from "../components/RelatedProduct";
import { Product } from '../types/Product';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigateProduct productName={product.title} />
      <ProductArea product={product} />
      <DescriptionProduct product={product} />
      <RelatedProduct product={product} />
    </div>
  );
};

export default ProductPage;

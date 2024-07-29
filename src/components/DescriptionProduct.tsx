import React from 'react';
import '../styles/description-product.css';
import { Product } from '../types/Product';

interface DescriptionProductProps {
  product: Product;
}

const DescriptionProduct: React.FC<DescriptionProductProps> = ({ product }) => {
  return (
    <div className="description-area">
      <div className="title-area">
        <p className="title active">Description</p>
        <p className="title">Additional Information</p>
      </div>
      <p className="description">
        {product.description.long}
      </p>
      <div className="images-product">
        {product.images.gallery.slice(0, 2).map((image, index) => (
          <img key={index} className="product-image" src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default DescriptionProduct;
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/Product';
import '../styles/section-product.css';

interface SectionProductProps {
  product: Product;
}

const SectionProduct: React.FC<SectionProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="section-product">
      <div className="image-gallery">
        <div className="image-mini">
          <img className='collage-img' src={product.images.mainImage} alt={product.title} />
          {/* Additional images if any */}
        </div>
      </div>
      <div className="info-product">
        <h2 className="name-product">{product.title}</h2>
        <p className="price">Rs. {product.salePrice.toFixed(2)}</p>
        <p className="description">{product.description.long}</p>
        <p className="op-size">Size</p>
        <div>
          {product.sizes.map((size, index) => (
            <button key={index} className="size-btn">{size}</button>
          ))}
        </div>
        <p className="color">Color</p>
        <div className="">
          {product.colors.map((color, index) => (
            <button key={index} className="color-btn" style={{ backgroundColor: color.hex }}></button>
          ))}
        </div>
        <div className='quantity-control'>
          <button className='quantity-btn'>-</button>
          <p className='quantity'>1</p>
          <button className='quantity-btn'>+</button>
        </div>
        <button className="add-cart" onClick={handleAddToCart}>Add To Cart</button>
        <hr/>
        <div className="left-infos">
          <p className="sku">SKU: {product.sku}</p>
          <p className="category">Category: {product.category}</p>
          <p className="tags">Tags: {product.tags.join(', ')}</p>
          <p className="share">Share</p>
        </div>
      </div>
    </div> 
  );
};

export default SectionProduct;

import React from 'react';
import '../styles/product-area.css';
import { Product } from '../types/Product';

interface ProductAreaProps {
  product: Product;
}

const ProductArea: React.FC<ProductAreaProps> = ({ product }) => {
  return (
    <div className="section-product">
      <div className="image-gallery">
        <div className="image-mini">
          {product.images.gallery.map((img, index) => (
            <img key={index} className='mini-img' src={img} alt={`Product image ${index + 1}`} />
          ))}
        </div>
        <div className="main-image">
          <img className='main-img' src={product.images.mainImage} alt={product.title} />
        </div>
      </div>
      <div className="info-product">
        <h2 className="name-product">{product.title}</h2>
        <p className="price">Rs. {product.salePrice.toFixed(2)}</p>
        <div className="ratings">
          <img className='rating-img' src='path_to_rating_image' alt="Rating" />
          <span className="review">{product.rating} Customer Reviews</span>
        </div>
        <p className="description">{product.description.long}</p>
        <p className="op-size">Size</p>
        <div className="size-buttons">
          {product.sizes.map((size, index) => (
            <button key={index} className="size-btn">{size}</button>
          ))}
        </div>
        <p className="color">Color</p>
        <div className="color-buttons">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className="color-btn"
              style={{ backgroundColor: color.hex }}
            ></button>
          ))}
        </div>
        <div className='quantity-control'>
          <button className='quantity-btn'>-</button>
          <p className='quantity'>1</p>
          <button className='quantity-btn'>+</button>
        </div>
        <button className="add-cart">Add To Cart</button>
        <hr />
        <div className="additional-info">
          <div className="info-item">
            <span className="label">SKU:</span>
            <span className="value">{product.sku}</span>
          </div>
          <div className="info-item">
            <span className="label">Category:</span>
            <span className="value">{product.category}</span>
          </div>
          <div className="info-item">
            <span className="label">Tags:</span>
            <span className="value">{product.tags.join(', ')}</span>
          </div>
          <div className="info-item">
            <span className="label">Share:</span>
            <div className="social-icons">
              <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/facebook-new.png' alt='Facebook' />
              </a>
              <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/instagram-new.png' alt='Instagram' />
              </a>
              <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                <img src='https://img.icons8.com/ios/50/000000/twitter.png' alt='Twitter' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;

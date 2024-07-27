import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carrossel.css';

interface Product {
  id: number;
  name: string;
  category: string;
  images: {
    mainImage: string;
    gallery: string[];
  };
}

interface CarrosselProps {
  data: Product[];
}

const Carrossel: React.FC<CarrosselProps> = ({ data }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleClick = () => {
    navigate('/shop');
  };

  return (
    <section className="section-carrossel">
      <div className="txt-carrossel">
        <h2>50+ Beautiful Rooms Inspiration</h2>
        <p>Our designers have created many beautiful prototypes of rooms to inspire you.</p>
        <button onClick={handleClick}>Explore More</button>
      </div>
      <Slider {...settings} className="carrossel-area">
        {data.map((product, index) => (
          <div key={index} className="img-carrossel" onClick={handleClick}>
            <div className="img-container">
              <img src={product.images.mainImage} alt={product.name} className="carrossel-img"
               />
               <div className="carrossel-info">
                <span className="category-name">{product.category}</span>
                <p className="name-product">{product.name}</p>
              </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </section>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} arrow-next`}
      style={{ ...style, right: '10px' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} arrow-prev`}
      style={{ ...style, left: '10px' }}
      onClick={onClick}
    />
  );
};

export default Carrossel;

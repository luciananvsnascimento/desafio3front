import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  description: {
    short: string;
    long: string;
  };
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  rating: number;
  images: {
    mainImage: string;
    gallery: string[];
  };
}

interface CarrosselProps {
  data: Product;
}

const Carrossel: React.FC<CarrosselProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="section-carrossel">
      <div className="title-carrossel">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button>Explore More</button>
      </div>
      <Slider {...settings}>
        {data.images.gallery.map((image: string, index: number) => (
          <div key={index} className="carrossel-item">
            <img className='category' src={image} alt={`Slide ${index}`} />
            <div className="description-image">
              <h3>{data.title}</h3>
              <p>{data.description.short}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrossel;

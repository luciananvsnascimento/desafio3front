import '../styles/categories-area.css';

const CategoriesArea = () => {
  return (
    <section className="cate-area">
      <div className='cate-info'>
        <div className='cate-text'>
          <h3>Browse The Range</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='cate-images'>
          <div className='cate-img'>
              <img className='category' src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/Dining.png' alt='Dining' />
            <p className='cate-name'>Dining</p>
          </div>
          <div className='cate-img'>
            <img className='category' src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/Living.png' alt='Living' />
            <p className='cate-name'>Living</p>
          </div>
          <div className='cate-img'>
            <img className='category' src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/Bathroom.png' alt='Bathroom' />
            <p className='cate-name'>Bathroom</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesArea;

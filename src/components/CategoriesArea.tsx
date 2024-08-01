import '../styles/categories-area.css';
import Dining from '../assets/Dining.png'
import Living from '../assets/Living.png'
import Bathroom from '../assets/Bathroom.png'

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
              <img className='category' src={Dining} alt='Dining' />
            <p className='cate-name'>Dining</p>
          </div>
          <div className='cate-img'>
            <img className='category' src={Living} alt='Living' />
            <p className='cate-name'>Living</p>
          </div>
          <div className='cate-img'>
            <img className='category' src={Bathroom} alt='Bathroom' />
            <p className='cate-name'>Bathroom</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesArea;

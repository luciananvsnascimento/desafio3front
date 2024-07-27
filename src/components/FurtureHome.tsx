import collage from '../assets/collage-img.png'
import '../styles/furture-home.css'

const FurtureHome = () => {
  return (
    <div className='section-furture'>

      <div className='text-furniture'>
        <span className='share'>Share your setup with</span>
        <p className='tag'>#FuniroFurniture</p>
      </div>
        <img className='collage-img' src={collage} alt="" />
      
    </div>
  )
}

export default FurtureHome

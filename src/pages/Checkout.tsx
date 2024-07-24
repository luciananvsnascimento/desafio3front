import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage';

const Checkout = () => {
  return (
    <div>
      <BannerPage 
        namepage="Checkout" 
        breadcrumb="Home > Checkout"
      />
    <BannerBenefits />
    
    </div>
  )
}

export default Checkout

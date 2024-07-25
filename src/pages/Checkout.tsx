import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage';
import SectionCheckout from '../components/SectionCheckout'

const Checkout = () => {
  return (
    <div>
      <BannerPage 
        namepage="Checkout" 
        breadcrumb="Home > Checkout"
      />
      <SectionCheckout/>
    <BannerBenefits />
    
    </div>
  )
}

export default Checkout

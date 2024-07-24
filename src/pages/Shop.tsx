import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage'; 

const Shop = () => {
  return (
    <div>
      <BannerPage 
        namepage="Shop" 
        breadcrumb="Home > Shop"
      />
       <BannerBenefits />
    </div>
  )
}

export default Shop

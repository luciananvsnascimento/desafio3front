import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage'; 
import FilterShop from '../components/FilterShop'
const Shop = () => {
  return (
    <div>
      <BannerPage 
        namepage="Shop" 
        breadcrumb="Home > Shop"
      />
      <FilterShop />
       <BannerBenefits />
       
    </div>
  )
}

export default Shop

import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage';
import SectionContact from '../components/SectionContact';

const Contact = () => {
  return (
    <div>
       <BannerPage 
        namepage="Contact Us" 
        breadcrumb="Home > Contact"
      />
      <SectionContact/>
    <BannerBenefits  />
   
    </div>
  )
}

export default Contact

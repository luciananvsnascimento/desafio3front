import '../styles/footer.css';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer>
      <div className='f-content'>
        <div className='f-box'>
          <span className='f-span'>Furniro.</span>
          <p className='f-text'>
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
          <div className='social-medias'>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios/50/000000/facebook-new.png' alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios/50/000000/instagram-new.png' alt='Instagram' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios/50/000000/twitter.png' alt='Twitter' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
              <img src='https://img.icons8.com/ios/50/000000/linkedin.png' alt='LinkedIn' />
            </a>
          </div>
        </div>
        <div className='f-info'>
          <div className='f-menus'>
            <ul className='menu1'>
              <span className='title'>Links</span>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className='menu2'>
              <span className='title'>Help</span>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          
        </div>
        <div className="footer-section">
            <span className='title'>Newsletter</span>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        
        
      </div>
      <div className='f-copyright'>
          <p className='copyright'>2023 Furniro. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
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
              <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
              <FaInstagram />
            </a>
            <a href='https://x.com/' target='_blank' rel='noreferrer'>
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className='f-info'>
          <div className='f-menus'>
            <ul className='menu1'>
              <span className='title-footer'>Links</span>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className='menu2'>
              <span className='title-footer'>Help</span>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <span className='title-footer'>Newsletter</span>
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

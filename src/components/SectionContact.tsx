import '../styles/sectioncontact.css';

const SectionContact = () => {
  return (
    <section className="section-contact">
      <div className='contact-text'>
        <h2>Get In Touch With Us</h2>
        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className='contact-area'>
        <div className="contact-info">
          <div className='contact-address'>
            <div>
              <h3>Address</h3>
              <p>236 5th SE Avenue, New<br/> York NY10000, United States</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>Mobile: + (84) 546-6789<br />Hotline: + (84) 456-6789</p>
            </div>
            <div>
              <h3>Working Time</h3>
              <p>Monday-Friday: 9:00 - <br />22:00<br />Saturday-Sunday: 9:00 - <br />21:00</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form className='form-contact'>
            <div className='field-contact'>
              <label>Your Name</label>
              <input type="text" placeholder="Abc" />
            </div>
            <div className='field-contact'>
              <label>Email Address</label>
              <input type="email" placeholder="Abc@def.com" />
            </div>
            <div className='field-contact'>
              <label>Subject</label>
              <input type="text" placeholder="This is optional" />
            </div>
            <div className='field-contact'>
              <label>Message</label>
              <textarea placeholder="Hi! I'd like to ask about" rows={4}></textarea>
            </div>
            <button className='btn-contact' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;

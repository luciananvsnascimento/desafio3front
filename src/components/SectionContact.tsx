import '../styles/sectioncontact.css';

const SectionContact = () => {
  return (
    <section className="section-contact">
      <div className="contact-info">
        <h2>Get In Touch With Us</h2>
        <p>
          For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
        <div>
          <span role="img" aria-label="location"></span>
          <div>
            <h3>Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>
        <div>
          <span role="img" aria-label="phone"></span>
          <div>
            <h3>Phone</h3>
            <p>Mobile: + (84) 546-6789<br />Hotline: + (84) 456-6789</p>
          </div>
        </div>
        <div>
          <span role="img" aria-label="clock"></span>
          <div>
            <h3>Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div>
            <label>Your Name</label>
            <input type="text" placeholder="Abc" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="Abc@def.com" />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" placeholder="This is optional" />
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder="Hi! I'd like to ask about" rows={4}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;

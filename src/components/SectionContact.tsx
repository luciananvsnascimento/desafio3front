import React, { useState } from 'react';
import '../styles/sectioncontact.css';

const SectionContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors: { [key: string]: string } = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

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
          <form className='form-contact' onSubmit={handleSubmit}>
            <div className='field-contact'>
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Abc" 
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className='field-contact'>
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Abc@def.com" 
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className='field-contact'>
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="This is optional" 
              />
            </div>
            <div className='field-contact'>
              <label>Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hi! I'd like to ask about" 
                rows={4} 
                required
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button className='btn-contact' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;

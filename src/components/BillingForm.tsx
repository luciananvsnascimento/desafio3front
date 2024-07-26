import React, { useState } from 'react';
import axios from 'axios';

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    zipCode: '',
    country: '',
    address: '',
    city: '',
    province: '',
    addonAddress: '',
    email: '',
    additional: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'zipCode' && value.length === 8) {
      fetchAddress(value);
    }
  };

  const fetchAddress = async (zipCode: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = response.data;
      if (!data.erro) {
        setFormData({
          ...formData,
          address: data.logradouro,
          city: data.localidade,
          province: data.uf,
          country: 'Brasil'
        });
      } else {
        alert('CEP não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      alert('Erro ao buscar endereço.');
    }
  };

  return (
    <div className="billing-form">
      <h2>Billing details</h2>
      <form className="billing-form-content">
        <div className="form-row">
          <div className="form-group form-group-half">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group form-group-half">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="company-name">Company Name (Optional)</label>
          <input
            type="text"
            id="company-name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="zip-code">ZIP code</label>
          <input
            type="text"
            id="zip-code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="country">Country / Region</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="address">Street address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="city">Town / City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="province">Province</label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="addon-address">Add-on address</label>
          <input
            type="text"
            id="addon-address"
            name="addonAddress"
            value={formData.addonAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="additional"></label>
          <input
            type="text"
            id="additional"
            name="additional"
            value={formData.additional}
            onChange={handleInputChange}
            placeholder="Additional information"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingForm;

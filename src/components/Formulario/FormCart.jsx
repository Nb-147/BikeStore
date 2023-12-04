import React, { useState } from 'react';

export const Form = ({ handleAddOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repeatEmail: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;

    // Validaciones
    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    if (name === 'phone' && value.length > 20) {
      return;
    }

    if (name === 'expirationDate') {
      if (value.length > 5) {
        return;
      }

      if (value.length === 2 && !value.includes('-')) {
        setFormData({
          ...formData,
          [name]: value + '-'
        });
        return;
      }
    }

    if (name === 'creditCardNumber' || name === 'cvv') {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    if ((name === 'creditCardNumber' && value.length > 16) || (name === 'cvv' && value.length > 3)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {

    if (!formData.email.includes('@') || formData.email !== formData.repeatEmail) {
      alert('El email no es válido o no coincide con el repetir email');
      return false;
    }

    if (!/^\d+$/.test(formData.phone)) {
      alert('El teléfono debe ser numérico');
      return false;
    }

    if (!/^\d{16}$/.test(formData.creditCardNumber)) {
      alert('El número de tarjeta de crédito debe tener 16 dígitos');
      return false;
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      alert('El CVV debe tener 3 dígitos');
      return false;
    }

    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      handleAddOrder(formData);
      setFormData({
        name: '',
        phone: '',
        email: '',
        repeatEmail: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-control bg-secondary mt-3 text-black">
      <h3>Complete para realizar la compra</h3>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          value={formData.name}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="phone"
          placeholder="Ingrese su teléfono"
          value={formData.phone}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="repeatEmail"
          placeholder="Repita su email"
          value={formData.repeatEmail}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="creditCardNumber"
          placeholder="Número de tarjeta de crédito"
          value={formData.creditCardNumber}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="expirationDate"
          placeholder="Fecha de vencimiento (MM-AA)"
          value={formData.expirationDate}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-success">Terminar compra</button>
    </form>
  );
};

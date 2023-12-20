import React, { useState } from 'react';

export const FormWithValidation = ({ handleAddOrder }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repeatEmail: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        email: '',
        repeatEmail: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
        general: ''
    });

    const handleOnChange = (evt) => {
        const { name, value } = evt.target;

        if (name === 'phone') {
            if (!/^\d*$/.test(value)) {
                return;
            }
        }

        if (name === 'phone' && value.length > 20) {
            return;
        }

        if (name === 'expirationDate') {
            const formattedValue = value.replace(/\D/g, '').slice(0, 4);
            const formattedDate = formattedValue.replace(/(\d{2})(\d{0,2})/, '$1-$2');

            setFormData({
                ...formData,
                [name]: formattedDate
            });
            return;
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


        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
            general: ''
        }));
    };

    const validateForm = () => {
        let errors = {
            name: '',
            phone: '',
            email: '',
            repeatEmail: '',
            creditCardNumber: '',
            expirationDate: '',
            cvv: '',
            general: ''
        };

        if (!formData.name.trim()) {
            errors.name = 'El nombre es obligatorio';
        }

        if (!/^\d+$/.test(formData.phone)) {
            errors.phone = 'El teléfono es obligatorio';
        }

        if (!formData.email.includes('@') || formData.email !== formData.repeatEmail) {
            errors.email = 'El email no es válido o no coincide con el repetir email';
        }

        if (!/^\d{16}$/.test(formData.creditCardNumber)) {
            errors.creditCardNumber = 'El número de tarjeta de crédito debe tener 16 dígitos';
        }

        if (!formData.expirationDate.trim()) {
            errors.expirationDate = 'La fecha de vencimiento es obligatoria';
        } else if (!/^\d{2}-\d{2}$/.test(formData.expirationDate)) {
            errors.expirationDate = 'Formato de fecha no válido (MM-AA)';
        }

        if (!/^\d{3}$/.test(formData.cvv)) {
            errors.cvv = 'El CVV debe tener 3 dígitos';
        }

        setFormErrors(errors);

        return Object.values(errors).every((error) => error === '');
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
            setFormErrors({
                name: '',
                phone: '',
                email: '',
                repeatEmail: '',
                creditCardNumber: '',
                expirationDate: '',
                cvv: '',
                general: ''
            });
        } else {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                general: 'Complete el formulario antes de terminar la compra'
            }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-control bg-dark mt-3 bg-opacity-75">
            <p>Complete para realizar la compra</p>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.name && 'is-invalid'}`}
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    placeholder="Ingrese su nombre"
                />
                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.phone && 'is-invalid'}`}
                    name="phone"
                    value={formData.phone}
                    onChange={handleOnChange}
                    placeholder="Ingrese su teléfono"
                />
                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.email && 'is-invalid'}`}
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    placeholder="Ingrese su email"
                />
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.repeatEmail && 'is-invalid'}`}
                    name="repeatEmail"
                    value={formData.repeatEmail}
                    onChange={handleOnChange}
                    placeholder="Repita su email"
                />
                {formErrors.repeatEmail && <div className="invalid-feedback">{formErrors.repeatEmail}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.creditCardNumber && 'is-invalid'}`}
                    name="creditCardNumber"
                    value={formData.creditCardNumber}
                    onChange={handleOnChange}
                    placeholder="Número de tarjeta de crédito"
                />
                {formErrors.creditCardNumber && <div className="invalid-feedback">{formErrors.creditCardNumber}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.expirationDate && 'is-invalid'}`}
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleOnChange}
                    placeholder="Fecha de vencimiento (MM-AA)"
                />
                {formErrors.expirationDate && <div className="invalid-feedback">{formErrors.expirationDate}</div>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className={`form-control ${formErrors.cvv && 'is-invalid'}`}
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleOnChange}
                    placeholder="CVV"
                />
                {formErrors.cvv && <div className="invalid-feedback">{formErrors.cvv}</div>}
            </div>
            {formErrors.general && <div className="mb-3 invalid-feedback">{formErrors.general}</div>}
            <button className="btn btn-success">Terminar compra</button>
        </form>
    );
};
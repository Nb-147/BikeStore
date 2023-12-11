import { useState } from 'react';
import { Form } from './Form';

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
        email: '',
        phone: '',
        creditCardNumber: '',
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
    };

    const validateForm = () => {
        const errors = {
            email: '',
            phone: '',
            creditCardNumber: '',
            cvv: '',
            general: ''
        };

        if (!formData.email.includes('@') || formData.email !== formData.repeatEmail) {
            errors.email = 'El email no es válido o no coincide con el repetir email';
        }

        if (!/^\d+$/.test(formData.phone)) {
            errors.phone = 'El teléfono debe ser numérico';
        }

        if (!/^\d{16}$/.test(formData.creditCardNumber)) {
            errors.creditCardNumber = 'El número de tarjeta de crédito debe tener 16 dígitos';
        }

        if (!/^\d{3}$/.test(formData.cvv)) {
            errors.cvv = 'El CVV debe tener 3 dígitos';
        }

        setFormErrors(errors);

        return Object.values(errors).every((error) => error === '');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (Object.values(formData).every((value) => value.trim() !== '')) {
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
                    email: '',
                    phone: '',
                    creditCardNumber: '',
                    cvv: '',
                    general: ''
                });
            }
        } else {
            setFormErrors({
                ...formErrors,
                general: 'Complete el formulario antes de terminar la compra'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-control bg-secondary mt-3 text-black">
            <p>Complete para realizar la compra</p>
            <Form formData={formData} handleOnChange={handleOnChange} formErrors={formErrors} />
            {formErrors.general && <p>{formErrors.general}</p>}
            <button className="btn btn-success">Terminar compra</button>
        </form>
    );
};

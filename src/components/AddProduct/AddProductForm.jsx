import React, { useState } from 'react';

export const AddProductForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        imageUrl: '',
        stock: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        imageUrl: '',
        stock: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateFormData(formData);
        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error !== '')) {
            return;
        }

        onSubmit(formData);
        setFormData({
            name: '',
            price: '',
            category: '',
            description: '',
            imageUrl: '',
            stock: '',
        });
    };

    const validateFormData = (data) => {
        let errors = {
            name: '',
            price: '',
            category: '',
            description: '',
            imageUrl: '',
            stock: '',
        };

        if (!data.name.trim()) {
            errors.name = 'El nombre es obligatorio';
        }

        if (!data.price.trim()) {
            errors.price = 'El precio es obligatorio';
        } else if (isNaN(data.price) || +data.price <= 0) {
            errors.price = 'El precio debe ser un número mayor que 0';
        }

        if (!data.category.trim()) {
            errors.category = 'La categoría es obligatoria';
        }

        if (!data.description.trim()) {
            errors.description = 'La descripción es obligatoria';
        }

        if (!data.imageUrl.trim()) {
            errors.imageUrl = 'La URL de la imagen es obligatoria';
        }

        if (!data.stock.trim()) {
            errors.stock = 'El stock es obligatorio';
        } else if (isNaN(data.stock) || +data.stock < 0) {
            errors.stock = 'El stock debe ser un número mayor o igual a 0';
        }

        return errors;
    };

    return (
        <form className='form-control-lg form-controls bg-secondary mt-3' onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" className={`form-control ${errors.name && 'is-invalid'}`} name="name" value={formData.name} onChange={handleChange} placeholder="Ingrese el nombre del producto" />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
                <input type="number" className={`form-control ${errors.price && 'is-invalid'}`} name="price" value={formData.price} onChange={handleChange} placeholder="Ingrese el precio del producto" />
                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
            </div>
            <div className="mb-3">
                <input type="text" className={`form-control ${errors.category && 'is-invalid'}`} name="category" value={formData.category} onChange={handleChange} placeholder="Ingrese la categoría del producto" />
                {errors.category && <div className="invalid-feedback">{errors.category}</div>}
            </div>
            <div className="mb-3">
                <textarea className={`form-control ${errors.description && 'is-invalid'}`} name="description" value={formData.description} onChange={handleChange} placeholder="Ingrese la descripción del producto"></textarea>
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <div className="mb-3">
                <input type="text" className={`form-control ${errors.imageUrl && 'is-invalid'}`} name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Ingrese la URL de la imagen del producto" />
                {errors.imageUrl && <div className="invalid-feedback">{errors.imageUrl}</div>}
            </div>
            <div className="mb-3">
                <input type="number" className={`form-control ${errors.stock && 'is-invalid'}`} name="stock" value={formData.stock} onChange={handleChange} placeholder="Ingrese la cantidad en stock" />
                {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
            </div>
            <button type="submit" className="btn btn-outline-dark btn-success ms-3">Agregar Producto</button>
        </form>
    );
};

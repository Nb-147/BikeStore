import React, { useState } from 'react';
import { formWhitValidation } from './FormWhitValidation';
import { Form } from './Form';


const FormWhitValidation = formWhitValidation(Form)

export const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleOnChange = (evt) => {
        // console.log(evt.target.name)
        // console.log(evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    console.log(formData)

    return (
        <div>
            {/* <Form formData={formData} handleOnChange={handleOnChange} /> */}
            <FormWhitValidation
                formData={formData}
                handleOnChange={handleOnChange}
            />
        </div>
    )
}



export const Form = ({ formData, handleOnChange }) => {
    return (
        <>
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
        </>
    );
};
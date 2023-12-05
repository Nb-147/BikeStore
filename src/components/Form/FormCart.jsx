import { FormWithValidation } from './FormWhitValidation';

export const FormCart = ({ handleAddOrder }) => {
  return (
    <div>
      {/* Otros elementos del carrito si es necesario */}
      <FormWithValidation handleAddOrder={handleAddOrder} />
    </div>
  );
};
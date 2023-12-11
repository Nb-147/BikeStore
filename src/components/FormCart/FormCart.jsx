import { FormWithValidation } from './FormWhitValidation';

export const FormCart = ({ handleAddOrder }) => {
  return (
    <div>
      <FormWithValidation handleAddOrder={handleAddOrder} />
    </div>
  );
};
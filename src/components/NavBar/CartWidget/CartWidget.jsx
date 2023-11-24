import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../Context/CartContext';

export const CartWidget = () => {
    const { cantidadTotal } = useCartContext();

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FaShoppingCart size={35} />
            <span style={{ marginLeft: '5px' }}>{cantidadTotal()}</span>
        </div>
    );
};

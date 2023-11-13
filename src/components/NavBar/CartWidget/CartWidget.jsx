import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => { 
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <p style={{fontSize: '30px', marginRight: '10px'}}>5</p>
            <FaShoppingCart size={35} />
        </div>
    );
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { ItemCounter } from '../../ItemCounter/IntemCounter';

export const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct({ ...product, quantity });
        setIsCounter(false);
        console.log(`Producto: ${product.name}, Cantidad seleccionada: ${quantity}`);
    };

    return (
        <div className="row justify-content-center align-items-center container">
            <div className="col-md-12">
                <h2> Vista del Detalle</h2>
                <br />
                <div className="card mx-auto text-center">
                    <div className="card-body d-md-flex align-items-md-start">
                        <img className="card w-100 mb-3 mb-md-0" src={product.imageUrl} alt="imagen" />
                        <div className="ms-md-3">
                            <p className="card-title h3 fw-bold"> {product.name}</p>
                            <p className="card-text"> {product.description}</p>
                            <p className="card-text">Precio: U$S {product.price}</p>
                            <p className="card-text">Stock: {product.stock}</p>
                            {isCounter && (
                                <ItemCounter initial={1} stock={product.stock} onAdd={onAdd} />
                            )}
                            {!isCounter && (
                                <div className="text-center mt-4 d-flex justify-content-center gap-4">
                                    <Link to={`/cart`}><button className="btn btn-outline-success mr-2">🛒 Ir al Carrito</button></Link>
                                    <Link to="/"><button className="btn btn-outline-primary">💲Seguir comprando</button></Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCounter } from '../../ItemCounter/IntemCouter';

export const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true);
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const onAdd = (quantity) => {
        setSelectedQuantity(quantity);
        setIsCounter(false);
    };

    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
                <h2>Vista de detalle</h2>
                <div className="card mx-auto text-center">
                    <div className="card-body">
                        <img className="w-75" src={product.imageUrl} alt="imagen" />
                        <p className="card-text h3 fw-bold"> {product.name}</p>
                        <p className="card-text"> {product.description}</p>
                        <p className="card-text">Precio: {product.price}</p>
                        <p className="card-text">Stock: {product.stock}</p>
                        {isCounter && (
                            <ItemCounter initial={1} stock={product.stock} onAdd={onAdd} />
                        )}

                        {!isCounter && (
                            <div className="text-center mt-4 d-flex justify-content-center gap-4">
                                <Link  to={`/cart`}><button className="btn btn-outline-dark mr-2">Ir al Carrito</button></Link> 
                                <Link to="/"><button className="btn btn-outline-dark">Ir al Inicio</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
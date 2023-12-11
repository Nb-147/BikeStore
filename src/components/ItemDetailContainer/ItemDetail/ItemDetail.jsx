import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { ItemCounter } from '../../ItemCounter/IntemCounter';
import { updateDoc, doc, getFirestore } from 'firebase/firestore';

export const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        const updatedStock = product.stock - quantity;
        const db = getFirestore();
        const productDocRef = doc(db, 'products', product.id)

        updateDoc(productDocRef, { stock: updatedStock })
            .catch((err) => {console.log(err);})

        addProduct({ ...product, quantity })
        setIsCounter(false);
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
                            <p> {product.description}</p>
                            <p>Precio: U$S {product.price}</p>
                            <p>Stock: {product.stock}</p>
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

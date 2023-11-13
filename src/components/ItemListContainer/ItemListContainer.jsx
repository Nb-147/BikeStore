import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import { Link, useParams } from "react-router-dom";
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { cid } = useParams();

    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(  result => setProductos(result.filter(product => product.category === cid)))
            .catch(err => console.log(err))            
        } else {
            mFetch()
            .then(  result => setProductos(result))
            .catch(err => console.log(err))            
        }
    }, [cid])

    return (
        <div>
            <h2 className="text-center">{greeting}</h2>
            <hr />
            <div className="row">
                {productos.map((product) => (
                    <div key={product.id} className="col mb-4">
                        <div className="card">
                            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <p className="card-text">Precio: {product.price}</p>
                                <p className="card-text">Stock: {product.stock}</p>
                            </div>
                            <div className='card-footer'>
                                <Link to={`/detail/${product.id}`}>
                                    <button className='btn btn-outline-dark w-100'>Detalle</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

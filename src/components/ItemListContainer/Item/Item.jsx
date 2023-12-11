import { memo } from "react";
import { Link } from "react-router-dom"

export const Item = memo(({ product }) => {
    return (
        <div className="card mx-auto">
            <div className="text-center"> 
                <img className="card-img-top" src={product.imageUrl} alt="imagen" />
            </div>
            <div className="card-body">
                <p>{product.name}</p>
                <p className="text-success mt-3"> U$S {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div>
                <Link to={`/detail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    );
});

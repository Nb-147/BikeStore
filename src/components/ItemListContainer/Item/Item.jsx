import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={product.imageUrl} alt="imagen" />
            <div className="card-body">
                <p>Nombre: {product.name}</p>
                {/* <p>Description: {product.description}</p> */}
                <p>Precio: {product.price}</p>
                <p className="card-text">Stock: {product.stock}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    );
};


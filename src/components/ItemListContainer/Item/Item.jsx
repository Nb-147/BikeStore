import { Link } from "react-router-dom"

export const Item = ({product}) => {
    return (
        
        <div className="card w-25">
            <div className='card-body p-0 text-center'>
                <img className="card-img-top w-100" src={product.imageUrl} alt="imagen"/>
                <p>Nombre: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
}


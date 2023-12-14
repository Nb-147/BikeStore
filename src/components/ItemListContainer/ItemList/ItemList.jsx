import { memo } from "react";
import { Item } from "../Item/Item";

export const ItemList = memo(({ products, onDeleteProduct }) => {
    return (
        <div className="container ">
            <div className="row row-cols-mx-3 g-4 ">
                {products.map(product => (
                    <div key={product.id} className="col mb-3 ">
                        <div className="card h-100">
                            <Item product={product} />
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
},
    (prevProps, nextProps) => {
        return prevProps.products.length === nextProps.products.length;
    });
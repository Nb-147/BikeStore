import { memo } from "react";
import { Item } from "../Item/Item";

export const ItemList = memo(({ products, onDeleteProduct }) => {
    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col mb-3">
                    <Item product={product} />
                    {product.isAddedByUser && (
                        <button className="mt-2 btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Eliminar Producto</button>
                    )}
                </div>
            ))}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.products.length === nextProps.products.length;
});
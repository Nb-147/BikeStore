import { memo } from "react";
import { Item } from "../Item/Item";

export const ItemList = memo(({ products, onDeleteProduct }) => {
    console.log('render de ItemList');

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col mb-3">
                    <Item product={product} />
                    {/* Mostrar el botón solo si el producto fue agregado por el usuario */}
                    {product.isAddedByUser && (
                        <button onClick={() => onDeleteProduct(product.id)}>
                            Eliminar Producto
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}, (prevProps, nextProps) => {
    // Este es el componente de comparación de memorización.
    // Puedes personalizarlo según tus necesidades.
    // Aquí, estoy comparando solo la longitud de la lista de productos.
    return prevProps.products.length === nextProps.products.length;
});
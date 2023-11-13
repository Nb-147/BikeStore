
import { Item } from "../Item/Item"


export const ItemList = ({ products }) => {
    console.log('render de Itemlist');

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col mb-3">
                    <Item product={product} />
                </div>
            ))}
        </div>
    );
};
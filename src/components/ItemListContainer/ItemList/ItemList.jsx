import { memo } from "react"
import { Item } from "../Item/Item"

export const ItemList = memo(({ products }) => {
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
}
    // }, (propsAntesDelRender, propsDespuesDelRender)=> propsAntesDelRender.products.length === propsDespuesDelRender.products.length
)
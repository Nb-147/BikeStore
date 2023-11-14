import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import { Link, useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { cid } = useParams();

    useEffect(() => {
        if (cid) {
            mFetch()
                .then(result => setProductos(result.filter(product => product.category === cid)))
                .catch(err => console.log(err))
        } else {
            mFetch()
                .then(result => setProductos(result))
                .catch(err => console.log(err))
        }
    }, [cid])

    return (
        <div>
            <h2 className="text-center">{greeting}</h2>
            <hr />
            <ItemList products={productos} />
        </div>
    );
};

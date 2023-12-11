import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useParams, Link } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";
import { Loading } from '../Loading/Loading';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cid } = useParams();

    useEffect(() => {
        fetchData(cid, setProducts, setLoading);
    }, [cid]);

    const fetchData = (cid, setProducts, setLoading) => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');

        setLoading(true);

        const queryPromise = cid
            ? getDocs(query(queryCollection, where('category', '==', cid)))
            : getDocs(queryCollection);

        queryPromise
            .then((query) => query.docs.map(product => ({
                id: product.id,
                ...product.data(),
                initialStock: product.data().stock,
            })))
            .then((productsData) => setProducts(productsData))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const handleDeleteProduct = (productId) => {
        const db = getFirestore();
        const productRef = doc(db, 'products', productId);

        deleteDoc(productRef)
            .then(() => setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h2 className="text-center">{greeting}</h2>
                    <hr />
                    <ItemList products={products} onDeleteProduct={handleDeleteProduct} />
                    <hr />
                    <Link to="/addProduct" className="btn btn-outline-dark btn-success">Agregar Producto</Link>
                </>
            )}
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, deleteDoc, doc } from 'firebase/firestore';
import { ItemList } from "./ItemList/ItemList";
import { Loading } from '../Loading/Loading';
import { handleDeleteProduct } from "../AddProduct/DeleteProduct";

import { useParams, Link } from "react-router-dom";

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

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h2 className="text-center">{greeting}</h2>
                    <ItemList products={products} onDeleteProduct={(productId) => handleDeleteProduct(productId, setProducts)} />
                    <Link to="/addProduct" className="btn btn-outline-dark btn-success">Agregar Producto</Link>
                </>
            )}
        </div>
    );
};
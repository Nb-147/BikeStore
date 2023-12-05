import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";
import { Loading } from '../Loading/Loading';
import { AddProduct } from '../AddProduct/AddProduct';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cid } = useParams();

    useEffect(() => {
        const fetchData = () => {
            const db = getFirestore();
            const queryCollection = collection(db, 'products');
            let queryPromise;

            if (cid) {
                const queryFilter = query(queryCollection, where('category', '==', cid));
                queryPromise = getDocs(queryFilter);
            } else {
                queryPromise = getDocs(queryCollection);
            }

            queryPromise
                .then((querySnapshot) => {
                    const productsData = querySnapshot.docs.map(product => ({ id: product.id, ...product.data() }));
                    setProducts(productsData);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchData();
    }, [cid]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleDeleteProduct = (productId) => {
        const db = getFirestore();
        const deletePromise = deleteDoc(doc(db, 'products', productId));

        deletePromise
            .then(() => {
                setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
            })
            .catch((err) => {
                console.log(err);
            });
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
                    <AddProduct onAddProduct={handleAddProduct} />
                </>
            )}
        </div>
    );
};

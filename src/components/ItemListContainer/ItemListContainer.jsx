import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";
import { Loading } from '../Loading/loading';
import { AddProduct } from '../AddProduct/AddProduct';

import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [meGusta, setMeGusta] = useState(false);
    const { cid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const queryCollection = collection(db, 'products');

            try {
                let querySnapshot;
                if (cid) {
                    const queryFilter = query(
                        queryCollection,
                        where('category', '==', cid)
                    );
                    querySnapshot = await getDocs(queryFilter);
                } else {
                    querySnapshot = await getDocs(queryCollection);
                }

                const productsData = querySnapshot.docs.map(product => ({ id: product.id, ...product.data() }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cid]);

    //sacar boton me gusta
    const handleMeGusta = () => {
        setMeGusta(!meGusta);
    };

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const db = getFirestore();
            await deleteDoc(doc(db, 'products', productId));
            setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        } catch (error) {
            console.error("Error deleting product: ", error);
        }
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
                    <button className="btn btn-outline-dark btn-primary" onClick={handleMeGusta}>Like 👍</button>
                    <AddProduct onAddProduct={handleAddProduct} />
                </>
            )}
        </div>
    );
};

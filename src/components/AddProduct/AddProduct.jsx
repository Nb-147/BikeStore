import React from "react";
import { addDoc, collection } from 'firebase/firestore';
import { firebaseConnect } from '../../Firebase/config';

export const AddProduct = ({ onAddProduct }) => {
    const db = firebaseConnect();

    const handleAddProduct = () => {
        const newProduct = {
            name: 'Casco Scott Arx - Blanco',
            price: 125,
            category: 'Cascos',
            description: 'Casco de competición de gama alta. Diseñado para aficionados y para corredores con aspiraciones en las carreras, el casco Arx es ligero e impresiona con su magnífica ventilación y otras características prácticas como el sistema de ajuste fácil y una visera desmontable. ',
            imageUrl: 'https://f.fcdn.app/imgs/7f7287/scott-montevideo.com.uy/bscouy/be21/webp/catalogo/241247_27_1/2000-2000/casco-scott-arx-blanco.jpg',
            stock: '1'
        };

        addDoc(collection(db, 'products'), newProduct)
            .then((docRef) => {
                const productWithId = { ...newProduct, id: docRef.id, isAddedByUser: true };
                onAddProduct(productWithId);
            })
            .catch((err) => {
                console.err(err);
            });
    };

    return (
        <button className="btn btn-outline-dark btn-success ms-3" onClick={handleAddProduct}>
            Agregar Producto
        </button>
    );
};

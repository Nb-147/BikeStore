import { addDoc, collection } from 'firebase/firestore';
import { firebaseConnect } from '../../Firebase/config';
import { AddProductForm } from './AddProductForm';

export const AddProduct = ({ onAddProduct }) => {
    const db = firebaseConnect();

    const handleAddProduct = (formData) => {
        const newProduct = { ...formData };

        addDoc(collection(db, 'products'), newProduct)
            .then((docRef) => {
                const productWithId = { ...newProduct, id: docRef.id, isAddedByUser: true };
                onAddProduct(productWithId);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h3>Agregar Producto</h3>
            <AddProductForm onSubmit={handleAddProduct} />
        </div>
    );
};
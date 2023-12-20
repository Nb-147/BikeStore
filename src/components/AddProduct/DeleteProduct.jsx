import { getFirestore, deleteDoc, doc } from 'firebase/firestore';

export const handleDeleteProduct = (productId, setProducts) => {
    const confirmDelete = window.confirm("¿Confirma que desea eliminar el producto?");

    if (confirmDelete) {
        const db = getFirestore();
        const productRef = doc(db, 'products', productId);

        deleteDoc(productRef)
            .then(() => setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)))
            .catch((err) => console.log(err));
    }
};
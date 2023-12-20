import { updateDoc, doc, getFirestore, getDoc } from 'firebase/firestore';

export const StockUpdater = ({ productId, quantity }) => {
    const updateStock = () => {
        const db = getFirestore();
        const productDocRef = doc(db, 'products', productId);

        return getDoc(productDocRef)
            .then((productSnapshot) => {
                if (productSnapshot.exists()) {
                    const currentStock = productSnapshot.data().stock;
                    const updatedStock = currentStock - quantity;

                    return updateDoc(productDocRef, { stock: updatedStock });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return { updateStock };
};
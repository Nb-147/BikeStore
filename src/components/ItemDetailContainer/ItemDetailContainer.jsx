import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/loading"

export const ItemDetialContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { pid } = useParams();


    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)

        getDoc(queryDoc)
            .then(product => setProduct({ id: product.id, ...product.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [pid])

    return (
        loading ?
            <Loading />
            :
            <ItemDetail product={product} />
            
    )
}

import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";
import './ItemListContainer.css';
import { LoadingComponent } from "../TextComponent/TextComponent";


export const ItemListContainer = ({ greeting }) => {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [meGusta, setMeGusta] = useState(false)
    const { cid } = useParams();

    useEffect(() => {
        if (cid) {
            mFetch()
                .then(result => setProducts(result.filter(product => product.category === cid)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            mFetch()
                .then(result => setProducts(result))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [cid])

    // función para cambiar el estado de me gusta
    const handleMeGusta = () => {
        setMeGusta(!meGusta)
    }

    // función para agregar un nuevo producto
    const handleAddProduct = () => {
        setProducts([
            ...product,
            {
                id: product.length + 1,
                name: 'Casco Scott Arx - Blanco',
                price: 125, category: 'Cascos',
                description: 'Casco de competición de gama alta. Diseñado para aficionados y para corredores con aspiraciones en las carreras, el casco Arx es ligero e impresiona con su magnífica ventilación y otras características prácticas como el sistema de ajuste fácil y una visera desmontable. ',
                imageUrl: 'https://f.fcdn.app/imgs/7f7287/scott-montevideo.com.uy/bscouy/be21/webp/catalogo/241247_27_1/2000-2000/casco-scott-arx-blanco.jpg',
                stock: '1'
            }
        ]);
    }
    console.log('render de ItemlistContainer')

    return (
        <div>
            {loading ? (
                <LoadingComponent />
            ) : (
                <>
                    <h2 className="text-center">{greeting}</h2>
                    <hr />
                    <ItemList products={product} />
                    <hr />
                    <button className="btn btn-outline-dark btn-primary" onClick={handleMeGusta}>Me Gusta</button>
                    <button className="btn btn-outline-dark btn-success ms-3" onClick={handleAddProduct}>Agregar Productos</button>
                </>
            )}
        </div>
    );
};

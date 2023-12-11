import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormCart } from '../FormCart/FormCart';

export const CartContainer = () => {
  const [id, setId] = useState('');
  const { cartList, deleteCart, removeProduct, totalPrice } = useCartContext();

  const handleAddOrder = (formData) => {
    const order = {
      buyer: formData,
      items: cartList.map(prod => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity
      })),
      total: totalPrice()
    };

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, 'orders');

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setId(docRef.id);
        deleteCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {id !== '' && (
        <div>
          <h3>Se generó la orden de compra: {id}</h3>
          <Link to="/">
            <button className="btn btn-success mt-5">Volver al Inicio</button>
          </Link>
        </div>
      )}

      {cartList.length > 0 && (
        <div>
          {cartList.map(prod => (
            <div key={prod.id}>
              <hr />
              <img src={prod.imageUrl} className="w-25 me-5" alt={prod.name} />
              {prod.name} - U$S {prod.price} - Cantidad: {prod.quantity}
              <button className="btn btn-danger ms-5" onClick={() => removeProduct(prod.id)}> X </button>
            </div>
          ))}
          <hr />
          <h2 className="border p-3 bg-secondary text-black">Total: U$S {totalPrice()}</h2>
          <br />
          <FormCart handleAddOrder={handleAddOrder} />
        </div>
      )}

      {id === '' && cartList.length === 0 && (
        <div>
          <p className="fs-1 mb-5">¡No has agregado productos en el carrito!</p>
          <Link to="/">
            <button className="btn btn-primary">Continuar Comprando</button>
          </Link>
        </div>
      )}
    </>
  );
};
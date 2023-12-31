import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../Context/CartContext';
import { FormCart } from '../FormCart/FormCart';
import { CartList } from './CartList';
import { StockUpdater } from '../StockUpdater/StockUpdater';
import { Link } from 'react-router-dom';

export const CartContainer = () => {
  const [id, setId] = useState('');
  const { cartList, deleteCart, removeProduct, totalPrice } = useCartContext();

  const handleAddOrder = (formData) => {
    const order = {
      buyer: formData,
      items: cartList.map((prod) => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: totalPrice(),
    };

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, 'orders');

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setId(docRef.id);

        const stockUpdater = StockUpdater({
          productId: cartList[0].id,
          quantity: cartList[0].quantity,
        });
        stockUpdater.updateStock();

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
          <h3 className="border bg-dark bg-opacity-75">Se generó la orden de compra: {id}</h3>
          <Link to="/">
            <button className="btn btn-success mt-5">Volver al Inicio</button>
          </Link>
        </div>
      )}

      {cartList.length > 0 && (
        <div>
          <CartList cartList={cartList} removeProduct={removeProduct} />

          <h2 className="border d-inline-block bg-dark bg-opacity-75">Total: U$S {totalPrice()}</h2>
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
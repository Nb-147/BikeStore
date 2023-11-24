import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext();

  return (
    <div className="mt-12 mb-10 container">
      {cartList.length === 0 ? (
        <div className="text-center">
          <p className="fs-4 mb-3" >No has agregado productos en el carrito.</p>
          <br />
          <Link to="/">
            <button className="btn btn-primary">Continuar Comprando</button>
          </Link>
        </div>
      ) : (
        <>
          {cartList.map((prod) => (
            <div key={prod.id} className="mb-5">
              <img src={prod.imageUrl} className="w-25 me-5" alt={prod.name} />
              {prod.name} - U$S {prod.price} - Cantidad: {prod.quantity}
              <button className="btn btn-danger ms-5" onClick={() => eliminarProducto(prod.id)}> X </button>
            </div>
          ))}
          <h2 className="g20">Total: U$S {precioTotal()}</h2>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/">
              <button className="btn btn-primary"> Volver al Inicio </button>
            </Link>
            <button className="btn btn-danger ms-3" onClick={deleteCart}> Vaciar Carrito </button>
          </div>
        </>
      )}
    </div>
  );
};

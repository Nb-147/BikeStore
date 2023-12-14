export const CartList = ({ cartList, removeProduct }) => {
    return (
        <div>
            {cartList.map((prod) => (
                <div key={prod.id} className="text-center">
                    <div className="d-flex align-items-center">
                        <img src={prod.imageUrl} className="w-25 mx-auto " alt={prod.name} />
                        <div className="ml-5 bg-dark bg-opacity-75 p-3">
                            {prod.name} - U$S {prod.price} - Cantidad: {prod.quantity}
                            <button className="btn btn-danger ms-5" onClick={() => removeProduct(prod.id)}>  {' '} X {' '}
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

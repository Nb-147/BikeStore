import { useState } from "react"

export const ItemCounter = ({ initial, stock, onAdd }) => {
    const [counter, setcounter] = useState(initial)

    const handleAdd = () => {
        if (counter < stock) setcounter(counter + 1)
    }
    const handleSubstract = (evt) => {
        console.log(evt)
        if (counter > initial) setcounter(counter - 1)
    }

    const handleOnAdd = () => onAdd(counter)
    return (
        <div>
            <button className="btn btn-outline-dark" onClick={handleAdd}> + 1 </button>
            <button className="btn btn-outline-dark ms-3" onClick={handleSubstract} > - 1 </button>
            <label>
                <strong className="card-text h3 fw-bold ms-3">{counter}</strong>
            </label>
            <br />
            <button className="btn btn-outline-dark mt-3" onClick={handleOnAdd}>  Agregar al carrito </button>
        </div>
    )
}

